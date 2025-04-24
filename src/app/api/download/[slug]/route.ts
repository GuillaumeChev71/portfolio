// app/api/download/[slug]/route.ts

import { NextResponse } from "next/server";
import { getBlogPosts } from "@/data/blog";
import puppeteer from "puppeteer";

export async function GET(
    req: Request,
    { params }: { params: { slug: string } }
) {
    const posts = await getBlogPosts();
    const post = posts.find((p) => p.slug === params.slug);

    if (!post) {
        return new NextResponse("Post not found", { status: 404 });
    }

    const htmlContent = post.source || "";
    const filename = `${params.slug}.pdf`;

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setContent(htmlContent, { waitUntil: "networkidle0" });
    const pdfBuffer = await page.pdf({ format: "A4" });

    await browser.close();

    return new NextResponse(pdfBuffer, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${filename}"`,
        },
    });
}
