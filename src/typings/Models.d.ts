declare namespace Models {
    type Article = {
        date: Date;
        slug: string;
        title: string;
    };
    type Location = {
        city: string;
        country: string;
        lat: number;
        lng: number;
    };

    type NavigationLinks = Record<
        string,
        { keywords: string[]; ignoreInNavigation?: boolean; name: string; to: string }
    >;
}
