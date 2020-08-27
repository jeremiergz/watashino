declare module Models {
  type Contact = {
    type:
      | 'email'
      | 'facebook'
      | 'github'
      | 'gitlab'
      | 'instagram'
      | 'linkedin'
      | 'messenger'
      | 'phone'
      | 'reddit'
      | 'skype'
      | 'twitter'
      | 'whatsapp';
    url: string;
  };

  type Post = {
    date: Date;
    slug: string;
    title: string;
  };
}
