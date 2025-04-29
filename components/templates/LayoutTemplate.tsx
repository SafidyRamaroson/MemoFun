"use client";
import { Header } from "../organisms/Header";
import { Layout } from "@/types/Layout.type";

export function LayoutTemplate({ children }: Layout) {
    return (
        <div className="min-h-screen mx-auto max-sm:px-2 px-6 pt-4 bg-gradient-to-br from-blue-300 to-violet-300">
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}