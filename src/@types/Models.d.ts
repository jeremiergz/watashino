declare module Models {
  type Post = {
    date: Date;
    slug: string;
    title: string;
  };

  type Skill = {
    name: string;
    proficiencyLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    sortOrder: number;
  };
}
