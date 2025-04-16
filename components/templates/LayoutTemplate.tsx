"use client";
import { Header } from "../organisms/Header";
import { Layout } from "@/types/Layout.type";

export function LayoutTemplate({ children }: Layout) {
    return (
        <div className="bg-slate-200">
            <div className="min-h-screen mx-auto max-sm:px-0 px-6 pt-4">
                <Header />
                <main>
                    {children}
                </main>
            </div>
        </div>
    )
}