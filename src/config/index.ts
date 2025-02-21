import { Metadata } from "next";

export const SITE_CONFIG: Metadata = {
    title: {
        // write a default title for Productlinq a a plug and play data company suggest something unique and catchy don't use the same words of a plug and play data company give a unique name
        default: "Productlinq - a plug and play data company",
        template: `%s | Productlinq`
    },
    description: "Productlinq is an a plug and play data company that helps you create a webshop in minutes. No coding skills required. Get started for free!",
    icons: {
        icon: [
            {
                url: "/icons/favicon.ico",
                href: "/icons/favicon.ico",
            }
        ]
    },
    openGraph: {
        title: "Productlinq - a plug and play data company",
        description: "Productlinq is an a plug and play data company that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        creator: "@shreyassihasane",
        title: "Productlinq - a plug and play data company",
        description: "Productlinq is an a plug and play data company that helps you create a website in minutes. No coding skills required. Get started for free!",
        images: [
            {
                url: "/assets/og-image.png",
            }
        ]
    },
    metadataBase: new URL("https://Productlinq-app.vercel.app"),
};
