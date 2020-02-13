declare module GraphQL {
  type Maybe<T> = T | null;

  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Date: any;
    JSON: any;
  };

  type BooleanQueryOperatorInput = {
    eq?: Maybe<Scalars['Boolean']>;
    ne?: Maybe<Scalars['Boolean']>;
    in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  };

  type DataJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    company?: Maybe<DataJsonCompany>;
    contacts?: Maybe<Array<Maybe<DataJsonContacts>>>;
    jobTitle?: Maybe<Scalars['String']>;
    location?: Maybe<DataJsonLocation>;
    openToGigs?: Maybe<Scalars['Boolean']>;
    resumeLink?: Maybe<Scalars['String']>;
  };

  type DataJsonCompany = {
    name?: Maybe<Scalars['String']>;
    website?: Maybe<Scalars['String']>;
  };

  type DataJsonCompanyFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    website?: Maybe<StringQueryOperatorInput>;
  };

  type DataJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<DataJsonEdge>;
    nodes: Array<DataJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<DataJsonGroupConnection>;
  };

  type DataJsonConnectionDistinctArgs = {
    field: DataJsonFieldsEnum;
  };

  type DataJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: DataJsonFieldsEnum;
  };

  type DataJsonContacts = {
    img?: Maybe<Scalars['String']>;
    label?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
  };

  type DataJsonContactsFilterInput = {
    img?: Maybe<StringQueryOperatorInput>;
    label?: Maybe<StringQueryOperatorInput>;
    url?: Maybe<StringQueryOperatorInput>;
  };

  type DataJsonContactsFilterListInput = {
    elemMatch?: Maybe<DataJsonContactsFilterInput>;
  };

  type DataJsonEdge = {
    next?: Maybe<DataJson>;
    node: DataJson;
    previous?: Maybe<DataJson>;
  };

  enum DataJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    CompanyName = 'company___name',
    CompanyWebsite = 'company___website',
    Contacts = 'contacts',
    ContactsImg = 'contacts___img',
    ContactsLabel = 'contacts___label',
    ContactsUrl = 'contacts___url',
    JobTitle = 'jobTitle',
    LocationCity = 'location___city',
    LocationCountry = 'location___country',
    LocationLat = 'location___lat',
    LocationLng = 'location___lng',
    LocationWebsite = 'location___website',
    OpenToGigs = 'openToGigs',
    ResumeLink = 'resumeLink',
  }

  type DataJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    company?: Maybe<DataJsonCompanyFilterInput>;
    contacts?: Maybe<DataJsonContactsFilterListInput>;
    jobTitle?: Maybe<StringQueryOperatorInput>;
    location?: Maybe<DataJsonLocationFilterInput>;
    openToGigs?: Maybe<BooleanQueryOperatorInput>;
    resumeLink?: Maybe<StringQueryOperatorInput>;
  };

  type DataJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<DataJsonEdge>;
    nodes: Array<DataJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type DataJsonLocation = {
    city?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    lat?: Maybe<Scalars['Float']>;
    lng?: Maybe<Scalars['Float']>;
    website?: Maybe<Scalars['String']>;
  };

  type DataJsonLocationFilterInput = {
    city?: Maybe<StringQueryOperatorInput>;
    country?: Maybe<StringQueryOperatorInput>;
    lat?: Maybe<FloatQueryOperatorInput>;
    lng?: Maybe<FloatQueryOperatorInput>;
    website?: Maybe<StringQueryOperatorInput>;
  };

  type DataJsonSortInput = {
    fields?: Maybe<Array<Maybe<DataJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type DateQueryOperatorInput = {
    eq?: Maybe<Scalars['Date']>;
    ne?: Maybe<Scalars['Date']>;
    gt?: Maybe<Scalars['Date']>;
    gte?: Maybe<Scalars['Date']>;
    lt?: Maybe<Scalars['Date']>;
    lte?: Maybe<Scalars['Date']>;
    in?: Maybe<Array<Maybe<Scalars['Date']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
  };

  type Directory = Node & {
    sourceInstanceName: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
    extension: Scalars['String'];
    size: Scalars['Int'];
    prettySize: Scalars['String'];
    modifiedTime: Scalars['Date'];
    accessTime: Scalars['Date'];
    changeTime: Scalars['Date'];
    birthTime: Scalars['Date'];
    root: Scalars['String'];
    dir: Scalars['String'];
    base: Scalars['String'];
    ext: Scalars['String'];
    name: Scalars['String'];
    relativeDirectory: Scalars['String'];
    dev: Scalars['Int'];
    mode: Scalars['Int'];
    nlink: Scalars['Int'];
    uid: Scalars['Int'];
    gid: Scalars['Int'];
    rdev: Scalars['Int'];
    ino: Scalars['Float'];
    atimeMs: Scalars['Float'];
    mtimeMs: Scalars['Float'];
    ctimeMs: Scalars['Float'];
    atime: Scalars['Date'];
    mtime: Scalars['Date'];
    ctime: Scalars['Date'];
    birthtime?: Maybe<Scalars['Date']>;
    birthtimeMs?: Maybe<Scalars['Float']>;
    blksize?: Maybe<Scalars['Int']>;
    blocks?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

  type DirectoryModifiedTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryAccessTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryChangeTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryBirthTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryAtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryMtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryCtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type DirectoryConnection = {
    totalCount: Scalars['Int'];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<DirectoryGroupConnection>;
  };

  type DirectoryConnectionDistinctArgs = {
    field: DirectoryFieldsEnum;
  };

  type DirectoryConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: DirectoryFieldsEnum;
  };

  type DirectoryEdge = {
    next?: Maybe<Directory>;
    node: Directory;
    previous?: Maybe<Directory>;
  };

  enum DirectoryFieldsEnum {
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Ino = 'ino',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
    BirthtimeMs = 'birthtimeMs',
    Blksize = 'blksize',
    Blocks = 'blocks',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
  }

  type DirectoryFilterInput = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type DirectoryGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type DirectorySortInput = {
    fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type DuotoneGradient = {
    highlight: Scalars['String'];
    shadow: Scalars['String'];
    opacity?: Maybe<Scalars['Int']>;
  };

  type File = Node & {
    sourceInstanceName: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
    extension: Scalars['String'];
    size: Scalars['Int'];
    prettySize: Scalars['String'];
    modifiedTime: Scalars['Date'];
    accessTime: Scalars['Date'];
    changeTime: Scalars['Date'];
    birthTime: Scalars['Date'];
    root: Scalars['String'];
    dir: Scalars['String'];
    base: Scalars['String'];
    ext: Scalars['String'];
    name: Scalars['String'];
    relativeDirectory: Scalars['String'];
    dev: Scalars['Int'];
    mode: Scalars['Int'];
    nlink: Scalars['Int'];
    uid: Scalars['Int'];
    gid: Scalars['Int'];
    rdev: Scalars['Int'];
    ino: Scalars['Float'];
    atimeMs: Scalars['Float'];
    mtimeMs: Scalars['Float'];
    ctimeMs: Scalars['Float'];
    atime: Scalars['Date'];
    mtime: Scalars['Date'];
    ctime: Scalars['Date'];
    birthtime?: Maybe<Scalars['Date']>;
    birthtimeMs?: Maybe<Scalars['Float']>;
    blksize?: Maybe<Scalars['Int']>;
    blocks?: Maybe<Scalars['Int']>;
    publicURL?: Maybe<Scalars['String']>;
    childImageSharp?: Maybe<ImageSharp>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    childDataJson?: Maybe<DataJson>;
    childrenSkillsJson?: Maybe<Array<Maybe<SkillsJson>>>;
    childrenNavigationJson?: Maybe<Array<Maybe<NavigationJson>>>;
    childrenTechnologiesJson?: Maybe<Array<Maybe<TechnologiesJson>>>;
    childGmapsJson?: Maybe<GmapsJson>;
    childMarkdownRemark?: Maybe<MarkdownRemark>;
  };

  type FileModifiedTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileAccessTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileChangeTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileBirthTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileAtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileMtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileCtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type FileConnection = {
    totalCount: Scalars['Int'];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<FileGroupConnection>;
  };

  type FileConnectionDistinctArgs = {
    field: FileFieldsEnum;
  };

  type FileConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: FileFieldsEnum;
  };

  type FileEdge = {
    next?: Maybe<File>;
    node: File;
    previous?: Maybe<File>;
  };

  enum FileFieldsEnum {
    SourceInstanceName = 'sourceInstanceName',
    AbsolutePath = 'absolutePath',
    RelativePath = 'relativePath',
    Extension = 'extension',
    Size = 'size',
    PrettySize = 'prettySize',
    ModifiedTime = 'modifiedTime',
    AccessTime = 'accessTime',
    ChangeTime = 'changeTime',
    BirthTime = 'birthTime',
    Root = 'root',
    Dir = 'dir',
    Base = 'base',
    Ext = 'ext',
    Name = 'name',
    RelativeDirectory = 'relativeDirectory',
    Dev = 'dev',
    Mode = 'mode',
    Nlink = 'nlink',
    Uid = 'uid',
    Gid = 'gid',
    Rdev = 'rdev',
    Ino = 'ino',
    AtimeMs = 'atimeMs',
    MtimeMs = 'mtimeMs',
    CtimeMs = 'ctimeMs',
    Atime = 'atime',
    Mtime = 'mtime',
    Ctime = 'ctime',
    Birthtime = 'birthtime',
    BirthtimeMs = 'birthtimeMs',
    Blksize = 'blksize',
    Blocks = 'blocks',
    PublicUrl = 'publicURL',
    ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
    ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
    ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
    ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
    ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
    ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
    ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
    ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
    ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
    ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
    ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
    ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
    ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
    ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
    ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
    ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
    ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
    ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
    ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
    ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
    ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
    ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
    ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
    ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
    ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
    ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
    ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
    ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
    ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
    ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
    ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
    ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
    ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
    ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
    ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
    ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
    ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
    ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
    ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
    ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
    ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
    ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
    ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
    ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
    ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
    ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
    ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
    ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
    ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
    ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
    ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
    ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
    ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
    ChildImageSharpId = 'childImageSharp___id',
    ChildImageSharpParentId = 'childImageSharp___parent___id',
    ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
    ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
    ChildImageSharpParentChildren = 'childImageSharp___parent___children',
    ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
    ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
    ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
    ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
    ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
    ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
    ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
    ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
    ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
    ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
    ChildImageSharpChildren = 'childImageSharp___children',
    ChildImageSharpChildrenId = 'childImageSharp___children___id',
    ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
    ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
    ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
    ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
    ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
    ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
    ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
    ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
    ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
    ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
    ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
    ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
    ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
    ChildImageSharpInternalContent = 'childImageSharp___internal___content',
    ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
    ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
    ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
    ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
    ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
    ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
    ChildImageSharpInternalType = 'childImageSharp___internal___type',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    ChildDataJsonId = 'childDataJson___id',
    ChildDataJsonParentId = 'childDataJson___parent___id',
    ChildDataJsonParentParentId = 'childDataJson___parent___parent___id',
    ChildDataJsonParentParentChildren = 'childDataJson___parent___parent___children',
    ChildDataJsonParentChildren = 'childDataJson___parent___children',
    ChildDataJsonParentChildrenId = 'childDataJson___parent___children___id',
    ChildDataJsonParentChildrenChildren = 'childDataJson___parent___children___children',
    ChildDataJsonParentInternalContent = 'childDataJson___parent___internal___content',
    ChildDataJsonParentInternalContentDigest = 'childDataJson___parent___internal___contentDigest',
    ChildDataJsonParentInternalDescription = 'childDataJson___parent___internal___description',
    ChildDataJsonParentInternalFieldOwners = 'childDataJson___parent___internal___fieldOwners',
    ChildDataJsonParentInternalIgnoreType = 'childDataJson___parent___internal___ignoreType',
    ChildDataJsonParentInternalMediaType = 'childDataJson___parent___internal___mediaType',
    ChildDataJsonParentInternalOwner = 'childDataJson___parent___internal___owner',
    ChildDataJsonParentInternalType = 'childDataJson___parent___internal___type',
    ChildDataJsonChildren = 'childDataJson___children',
    ChildDataJsonChildrenId = 'childDataJson___children___id',
    ChildDataJsonChildrenParentId = 'childDataJson___children___parent___id',
    ChildDataJsonChildrenParentChildren = 'childDataJson___children___parent___children',
    ChildDataJsonChildrenChildren = 'childDataJson___children___children',
    ChildDataJsonChildrenChildrenId = 'childDataJson___children___children___id',
    ChildDataJsonChildrenChildrenChildren = 'childDataJson___children___children___children',
    ChildDataJsonChildrenInternalContent = 'childDataJson___children___internal___content',
    ChildDataJsonChildrenInternalContentDigest = 'childDataJson___children___internal___contentDigest',
    ChildDataJsonChildrenInternalDescription = 'childDataJson___children___internal___description',
    ChildDataJsonChildrenInternalFieldOwners = 'childDataJson___children___internal___fieldOwners',
    ChildDataJsonChildrenInternalIgnoreType = 'childDataJson___children___internal___ignoreType',
    ChildDataJsonChildrenInternalMediaType = 'childDataJson___children___internal___mediaType',
    ChildDataJsonChildrenInternalOwner = 'childDataJson___children___internal___owner',
    ChildDataJsonChildrenInternalType = 'childDataJson___children___internal___type',
    ChildDataJsonInternalContent = 'childDataJson___internal___content',
    ChildDataJsonInternalContentDigest = 'childDataJson___internal___contentDigest',
    ChildDataJsonInternalDescription = 'childDataJson___internal___description',
    ChildDataJsonInternalFieldOwners = 'childDataJson___internal___fieldOwners',
    ChildDataJsonInternalIgnoreType = 'childDataJson___internal___ignoreType',
    ChildDataJsonInternalMediaType = 'childDataJson___internal___mediaType',
    ChildDataJsonInternalOwner = 'childDataJson___internal___owner',
    ChildDataJsonInternalType = 'childDataJson___internal___type',
    ChildDataJsonCompanyName = 'childDataJson___company___name',
    ChildDataJsonCompanyWebsite = 'childDataJson___company___website',
    ChildDataJsonContacts = 'childDataJson___contacts',
    ChildDataJsonContactsImg = 'childDataJson___contacts___img',
    ChildDataJsonContactsLabel = 'childDataJson___contacts___label',
    ChildDataJsonContactsUrl = 'childDataJson___contacts___url',
    ChildDataJsonJobTitle = 'childDataJson___jobTitle',
    ChildDataJsonLocationCity = 'childDataJson___location___city',
    ChildDataJsonLocationCountry = 'childDataJson___location___country',
    ChildDataJsonLocationLat = 'childDataJson___location___lat',
    ChildDataJsonLocationLng = 'childDataJson___location___lng',
    ChildDataJsonLocationWebsite = 'childDataJson___location___website',
    ChildDataJsonOpenToGigs = 'childDataJson___openToGigs',
    ChildDataJsonResumeLink = 'childDataJson___resumeLink',
    ChildrenSkillsJson = 'childrenSkillsJson',
    ChildrenSkillsJsonId = 'childrenSkillsJson___id',
    ChildrenSkillsJsonParentId = 'childrenSkillsJson___parent___id',
    ChildrenSkillsJsonParentParentId = 'childrenSkillsJson___parent___parent___id',
    ChildrenSkillsJsonParentParentChildren = 'childrenSkillsJson___parent___parent___children',
    ChildrenSkillsJsonParentChildren = 'childrenSkillsJson___parent___children',
    ChildrenSkillsJsonParentChildrenId = 'childrenSkillsJson___parent___children___id',
    ChildrenSkillsJsonParentChildrenChildren = 'childrenSkillsJson___parent___children___children',
    ChildrenSkillsJsonParentInternalContent = 'childrenSkillsJson___parent___internal___content',
    ChildrenSkillsJsonParentInternalContentDigest = 'childrenSkillsJson___parent___internal___contentDigest',
    ChildrenSkillsJsonParentInternalDescription = 'childrenSkillsJson___parent___internal___description',
    ChildrenSkillsJsonParentInternalFieldOwners = 'childrenSkillsJson___parent___internal___fieldOwners',
    ChildrenSkillsJsonParentInternalIgnoreType = 'childrenSkillsJson___parent___internal___ignoreType',
    ChildrenSkillsJsonParentInternalMediaType = 'childrenSkillsJson___parent___internal___mediaType',
    ChildrenSkillsJsonParentInternalOwner = 'childrenSkillsJson___parent___internal___owner',
    ChildrenSkillsJsonParentInternalType = 'childrenSkillsJson___parent___internal___type',
    ChildrenSkillsJsonChildren = 'childrenSkillsJson___children',
    ChildrenSkillsJsonChildrenId = 'childrenSkillsJson___children___id',
    ChildrenSkillsJsonChildrenParentId = 'childrenSkillsJson___children___parent___id',
    ChildrenSkillsJsonChildrenParentChildren = 'childrenSkillsJson___children___parent___children',
    ChildrenSkillsJsonChildrenChildren = 'childrenSkillsJson___children___children',
    ChildrenSkillsJsonChildrenChildrenId = 'childrenSkillsJson___children___children___id',
    ChildrenSkillsJsonChildrenChildrenChildren = 'childrenSkillsJson___children___children___children',
    ChildrenSkillsJsonChildrenInternalContent = 'childrenSkillsJson___children___internal___content',
    ChildrenSkillsJsonChildrenInternalContentDigest = 'childrenSkillsJson___children___internal___contentDigest',
    ChildrenSkillsJsonChildrenInternalDescription = 'childrenSkillsJson___children___internal___description',
    ChildrenSkillsJsonChildrenInternalFieldOwners = 'childrenSkillsJson___children___internal___fieldOwners',
    ChildrenSkillsJsonChildrenInternalIgnoreType = 'childrenSkillsJson___children___internal___ignoreType',
    ChildrenSkillsJsonChildrenInternalMediaType = 'childrenSkillsJson___children___internal___mediaType',
    ChildrenSkillsJsonChildrenInternalOwner = 'childrenSkillsJson___children___internal___owner',
    ChildrenSkillsJsonChildrenInternalType = 'childrenSkillsJson___children___internal___type',
    ChildrenSkillsJsonInternalContent = 'childrenSkillsJson___internal___content',
    ChildrenSkillsJsonInternalContentDigest = 'childrenSkillsJson___internal___contentDigest',
    ChildrenSkillsJsonInternalDescription = 'childrenSkillsJson___internal___description',
    ChildrenSkillsJsonInternalFieldOwners = 'childrenSkillsJson___internal___fieldOwners',
    ChildrenSkillsJsonInternalIgnoreType = 'childrenSkillsJson___internal___ignoreType',
    ChildrenSkillsJsonInternalMediaType = 'childrenSkillsJson___internal___mediaType',
    ChildrenSkillsJsonInternalOwner = 'childrenSkillsJson___internal___owner',
    ChildrenSkillsJsonInternalType = 'childrenSkillsJson___internal___type',
    ChildrenSkillsJsonName = 'childrenSkillsJson___name',
    ChildrenSkillsJsonSortOrder = 'childrenSkillsJson___sortOrder',
    ChildrenSkillsJsonItems = 'childrenSkillsJson___items',
    ChildrenSkillsJsonItemsName = 'childrenSkillsJson___items___name',
    ChildrenSkillsJsonItemsProficiencyLevel = 'childrenSkillsJson___items___proficiencyLevel',
    ChildrenSkillsJsonItemsSortOrder = 'childrenSkillsJson___items___sortOrder',
    ChildrenNavigationJson = 'childrenNavigationJson',
    ChildrenNavigationJsonId = 'childrenNavigationJson___id',
    ChildrenNavigationJsonParentId = 'childrenNavigationJson___parent___id',
    ChildrenNavigationJsonParentParentId = 'childrenNavigationJson___parent___parent___id',
    ChildrenNavigationJsonParentParentChildren = 'childrenNavigationJson___parent___parent___children',
    ChildrenNavigationJsonParentChildren = 'childrenNavigationJson___parent___children',
    ChildrenNavigationJsonParentChildrenId = 'childrenNavigationJson___parent___children___id',
    ChildrenNavigationJsonParentChildrenChildren = 'childrenNavigationJson___parent___children___children',
    ChildrenNavigationJsonParentInternalContent = 'childrenNavigationJson___parent___internal___content',
    ChildrenNavigationJsonParentInternalContentDigest = 'childrenNavigationJson___parent___internal___contentDigest',
    ChildrenNavigationJsonParentInternalDescription = 'childrenNavigationJson___parent___internal___description',
    ChildrenNavigationJsonParentInternalFieldOwners = 'childrenNavigationJson___parent___internal___fieldOwners',
    ChildrenNavigationJsonParentInternalIgnoreType = 'childrenNavigationJson___parent___internal___ignoreType',
    ChildrenNavigationJsonParentInternalMediaType = 'childrenNavigationJson___parent___internal___mediaType',
    ChildrenNavigationJsonParentInternalOwner = 'childrenNavigationJson___parent___internal___owner',
    ChildrenNavigationJsonParentInternalType = 'childrenNavigationJson___parent___internal___type',
    ChildrenNavigationJsonChildren = 'childrenNavigationJson___children',
    ChildrenNavigationJsonChildrenId = 'childrenNavigationJson___children___id',
    ChildrenNavigationJsonChildrenParentId = 'childrenNavigationJson___children___parent___id',
    ChildrenNavigationJsonChildrenParentChildren = 'childrenNavigationJson___children___parent___children',
    ChildrenNavigationJsonChildrenChildren = 'childrenNavigationJson___children___children',
    ChildrenNavigationJsonChildrenChildrenId = 'childrenNavigationJson___children___children___id',
    ChildrenNavigationJsonChildrenChildrenChildren = 'childrenNavigationJson___children___children___children',
    ChildrenNavigationJsonChildrenInternalContent = 'childrenNavigationJson___children___internal___content',
    ChildrenNavigationJsonChildrenInternalContentDigest = 'childrenNavigationJson___children___internal___contentDigest',
    ChildrenNavigationJsonChildrenInternalDescription = 'childrenNavigationJson___children___internal___description',
    ChildrenNavigationJsonChildrenInternalFieldOwners = 'childrenNavigationJson___children___internal___fieldOwners',
    ChildrenNavigationJsonChildrenInternalIgnoreType = 'childrenNavigationJson___children___internal___ignoreType',
    ChildrenNavigationJsonChildrenInternalMediaType = 'childrenNavigationJson___children___internal___mediaType',
    ChildrenNavigationJsonChildrenInternalOwner = 'childrenNavigationJson___children___internal___owner',
    ChildrenNavigationJsonChildrenInternalType = 'childrenNavigationJson___children___internal___type',
    ChildrenNavigationJsonInternalContent = 'childrenNavigationJson___internal___content',
    ChildrenNavigationJsonInternalContentDigest = 'childrenNavigationJson___internal___contentDigest',
    ChildrenNavigationJsonInternalDescription = 'childrenNavigationJson___internal___description',
    ChildrenNavigationJsonInternalFieldOwners = 'childrenNavigationJson___internal___fieldOwners',
    ChildrenNavigationJsonInternalIgnoreType = 'childrenNavigationJson___internal___ignoreType',
    ChildrenNavigationJsonInternalMediaType = 'childrenNavigationJson___internal___mediaType',
    ChildrenNavigationJsonInternalOwner = 'childrenNavigationJson___internal___owner',
    ChildrenNavigationJsonInternalType = 'childrenNavigationJson___internal___type',
    ChildrenNavigationJsonIcon = 'childrenNavigationJson___icon',
    ChildrenNavigationJsonKeywords = 'childrenNavigationJson___keywords',
    ChildrenNavigationJsonName = 'childrenNavigationJson___name',
    ChildrenNavigationJsonNavOrder = 'childrenNavigationJson___navOrder',
    ChildrenNavigationJsonPage = 'childrenNavigationJson___page',
    ChildrenNavigationJsonTo = 'childrenNavigationJson___to',
    ChildrenNavigationJsonIgnoreInNavigation = 'childrenNavigationJson___ignoreInNavigation',
    ChildrenTechnologiesJson = 'childrenTechnologiesJson',
    ChildrenTechnologiesJsonId = 'childrenTechnologiesJson___id',
    ChildrenTechnologiesJsonParentId = 'childrenTechnologiesJson___parent___id',
    ChildrenTechnologiesJsonParentParentId = 'childrenTechnologiesJson___parent___parent___id',
    ChildrenTechnologiesJsonParentParentChildren = 'childrenTechnologiesJson___parent___parent___children',
    ChildrenTechnologiesJsonParentChildren = 'childrenTechnologiesJson___parent___children',
    ChildrenTechnologiesJsonParentChildrenId = 'childrenTechnologiesJson___parent___children___id',
    ChildrenTechnologiesJsonParentChildrenChildren = 'childrenTechnologiesJson___parent___children___children',
    ChildrenTechnologiesJsonParentInternalContent = 'childrenTechnologiesJson___parent___internal___content',
    ChildrenTechnologiesJsonParentInternalContentDigest = 'childrenTechnologiesJson___parent___internal___contentDigest',
    ChildrenTechnologiesJsonParentInternalDescription = 'childrenTechnologiesJson___parent___internal___description',
    ChildrenTechnologiesJsonParentInternalFieldOwners = 'childrenTechnologiesJson___parent___internal___fieldOwners',
    ChildrenTechnologiesJsonParentInternalIgnoreType = 'childrenTechnologiesJson___parent___internal___ignoreType',
    ChildrenTechnologiesJsonParentInternalMediaType = 'childrenTechnologiesJson___parent___internal___mediaType',
    ChildrenTechnologiesJsonParentInternalOwner = 'childrenTechnologiesJson___parent___internal___owner',
    ChildrenTechnologiesJsonParentInternalType = 'childrenTechnologiesJson___parent___internal___type',
    ChildrenTechnologiesJsonChildren = 'childrenTechnologiesJson___children',
    ChildrenTechnologiesJsonChildrenId = 'childrenTechnologiesJson___children___id',
    ChildrenTechnologiesJsonChildrenParentId = 'childrenTechnologiesJson___children___parent___id',
    ChildrenTechnologiesJsonChildrenParentChildren = 'childrenTechnologiesJson___children___parent___children',
    ChildrenTechnologiesJsonChildrenChildren = 'childrenTechnologiesJson___children___children',
    ChildrenTechnologiesJsonChildrenChildrenId = 'childrenTechnologiesJson___children___children___id',
    ChildrenTechnologiesJsonChildrenChildrenChildren = 'childrenTechnologiesJson___children___children___children',
    ChildrenTechnologiesJsonChildrenInternalContent = 'childrenTechnologiesJson___children___internal___content',
    ChildrenTechnologiesJsonChildrenInternalContentDigest = 'childrenTechnologiesJson___children___internal___contentDigest',
    ChildrenTechnologiesJsonChildrenInternalDescription = 'childrenTechnologiesJson___children___internal___description',
    ChildrenTechnologiesJsonChildrenInternalFieldOwners = 'childrenTechnologiesJson___children___internal___fieldOwners',
    ChildrenTechnologiesJsonChildrenInternalIgnoreType = 'childrenTechnologiesJson___children___internal___ignoreType',
    ChildrenTechnologiesJsonChildrenInternalMediaType = 'childrenTechnologiesJson___children___internal___mediaType',
    ChildrenTechnologiesJsonChildrenInternalOwner = 'childrenTechnologiesJson___children___internal___owner',
    ChildrenTechnologiesJsonChildrenInternalType = 'childrenTechnologiesJson___children___internal___type',
    ChildrenTechnologiesJsonInternalContent = 'childrenTechnologiesJson___internal___content',
    ChildrenTechnologiesJsonInternalContentDigest = 'childrenTechnologiesJson___internal___contentDigest',
    ChildrenTechnologiesJsonInternalDescription = 'childrenTechnologiesJson___internal___description',
    ChildrenTechnologiesJsonInternalFieldOwners = 'childrenTechnologiesJson___internal___fieldOwners',
    ChildrenTechnologiesJsonInternalIgnoreType = 'childrenTechnologiesJson___internal___ignoreType',
    ChildrenTechnologiesJsonInternalMediaType = 'childrenTechnologiesJson___internal___mediaType',
    ChildrenTechnologiesJsonInternalOwner = 'childrenTechnologiesJson___internal___owner',
    ChildrenTechnologiesJsonInternalType = 'childrenTechnologiesJson___internal___type',
    ChildrenTechnologiesJsonImg = 'childrenTechnologiesJson___img',
    ChildrenTechnologiesJsonName = 'childrenTechnologiesJson___name',
    ChildrenTechnologiesJsonWebsite = 'childrenTechnologiesJson___website',
    ChildGmapsJsonId = 'childGmapsJson___id',
    ChildGmapsJsonParentId = 'childGmapsJson___parent___id',
    ChildGmapsJsonParentParentId = 'childGmapsJson___parent___parent___id',
    ChildGmapsJsonParentParentChildren = 'childGmapsJson___parent___parent___children',
    ChildGmapsJsonParentChildren = 'childGmapsJson___parent___children',
    ChildGmapsJsonParentChildrenId = 'childGmapsJson___parent___children___id',
    ChildGmapsJsonParentChildrenChildren = 'childGmapsJson___parent___children___children',
    ChildGmapsJsonParentInternalContent = 'childGmapsJson___parent___internal___content',
    ChildGmapsJsonParentInternalContentDigest = 'childGmapsJson___parent___internal___contentDigest',
    ChildGmapsJsonParentInternalDescription = 'childGmapsJson___parent___internal___description',
    ChildGmapsJsonParentInternalFieldOwners = 'childGmapsJson___parent___internal___fieldOwners',
    ChildGmapsJsonParentInternalIgnoreType = 'childGmapsJson___parent___internal___ignoreType',
    ChildGmapsJsonParentInternalMediaType = 'childGmapsJson___parent___internal___mediaType',
    ChildGmapsJsonParentInternalOwner = 'childGmapsJson___parent___internal___owner',
    ChildGmapsJsonParentInternalType = 'childGmapsJson___parent___internal___type',
    ChildGmapsJsonChildren = 'childGmapsJson___children',
    ChildGmapsJsonChildrenId = 'childGmapsJson___children___id',
    ChildGmapsJsonChildrenParentId = 'childGmapsJson___children___parent___id',
    ChildGmapsJsonChildrenParentChildren = 'childGmapsJson___children___parent___children',
    ChildGmapsJsonChildrenChildren = 'childGmapsJson___children___children',
    ChildGmapsJsonChildrenChildrenId = 'childGmapsJson___children___children___id',
    ChildGmapsJsonChildrenChildrenChildren = 'childGmapsJson___children___children___children',
    ChildGmapsJsonChildrenInternalContent = 'childGmapsJson___children___internal___content',
    ChildGmapsJsonChildrenInternalContentDigest = 'childGmapsJson___children___internal___contentDigest',
    ChildGmapsJsonChildrenInternalDescription = 'childGmapsJson___children___internal___description',
    ChildGmapsJsonChildrenInternalFieldOwners = 'childGmapsJson___children___internal___fieldOwners',
    ChildGmapsJsonChildrenInternalIgnoreType = 'childGmapsJson___children___internal___ignoreType',
    ChildGmapsJsonChildrenInternalMediaType = 'childGmapsJson___children___internal___mediaType',
    ChildGmapsJsonChildrenInternalOwner = 'childGmapsJson___children___internal___owner',
    ChildGmapsJsonChildrenInternalType = 'childGmapsJson___children___internal___type',
    ChildGmapsJsonInternalContent = 'childGmapsJson___internal___content',
    ChildGmapsJsonInternalContentDigest = 'childGmapsJson___internal___contentDigest',
    ChildGmapsJsonInternalDescription = 'childGmapsJson___internal___description',
    ChildGmapsJsonInternalFieldOwners = 'childGmapsJson___internal___fieldOwners',
    ChildGmapsJsonInternalIgnoreType = 'childGmapsJson___internal___ignoreType',
    ChildGmapsJsonInternalMediaType = 'childGmapsJson___internal___mediaType',
    ChildGmapsJsonInternalOwner = 'childGmapsJson___internal___owner',
    ChildGmapsJsonInternalType = 'childGmapsJson___internal___type',
    ChildGmapsJsonStylesDark = 'childGmapsJson___styles___dark',
    ChildGmapsJsonStylesDarkElementType = 'childGmapsJson___styles___dark___elementType',
    ChildGmapsJsonStylesDarkStylers = 'childGmapsJson___styles___dark___stylers',
    ChildGmapsJsonStylesDarkFeatureType = 'childGmapsJson___styles___dark___featureType',
    ChildGmapsJsonStylesLight = 'childGmapsJson___styles___light',
    ChildGmapsJsonStylesLightElementType = 'childGmapsJson___styles___light___elementType',
    ChildGmapsJsonStylesLightStylers = 'childGmapsJson___styles___light___stylers',
    ChildGmapsJsonStylesLightFeatureType = 'childGmapsJson___styles___light___featureType',
    ChildMarkdownRemarkId = 'childMarkdownRemark___id',
    ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
    ChildMarkdownRemarkFrontmatterKeywords = 'childMarkdownRemark___frontmatter___keywords',
    ChildMarkdownRemarkFrontmatterSlug = 'childMarkdownRemark___frontmatter___slug',
    ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
    ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
    ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
    ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
    ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
    ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
    ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
    ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
    ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
    ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
    ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
    ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
    ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
    ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
    ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
    ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
    ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
    ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
    ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
    ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
    ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
    ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
    ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
    ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
    ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
    ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
    ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
    ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
    ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
    ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
    ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
    ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
    ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
    ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
    ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
    ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
    ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
    ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
    ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
    ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
    ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
    ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
    ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
    ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
    ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
    ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
    ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
    ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
    ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
    ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
    ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
    ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
    ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
    ChildMarkdownRemarkChildGrvscCodeBlockIndex = 'childMarkdownRemark___childGrvscCodeBlock___index',
    ChildMarkdownRemarkChildGrvscCodeBlockHtml = 'childMarkdownRemark___childGrvscCodeBlock___html',
    ChildMarkdownRemarkChildGrvscCodeBlockText = 'childMarkdownRemark___childGrvscCodeBlock___text',
    ChildMarkdownRemarkChildGrvscCodeBlockPreClassName = 'childMarkdownRemark___childGrvscCodeBlock___preClassName',
    ChildMarkdownRemarkChildGrvscCodeBlockCodeClassName = 'childMarkdownRemark___childGrvscCodeBlock___codeClassName',
    ChildMarkdownRemarkChildGrvscCodeBlockLanguage = 'childMarkdownRemark___childGrvscCodeBlock___language',
    ChildMarkdownRemarkChildGrvscCodeBlockMeta = 'childMarkdownRemark___childGrvscCodeBlock___meta',
    ChildMarkdownRemarkChildGrvscCodeBlockDefaultThemePath = 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___path',
    ChildMarkdownRemarkChildGrvscCodeBlockDefaultThemeIdentifier = 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___identifier',
    ChildMarkdownRemarkChildGrvscCodeBlockDefaultThemeConditions = 'childMarkdownRemark___childGrvscCodeBlock___defaultTheme___conditions',
    ChildMarkdownRemarkChildGrvscCodeBlockAdditionalThemes = 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes',
    ChildMarkdownRemarkChildGrvscCodeBlockAdditionalThemesPath = 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___path',
    ChildMarkdownRemarkChildGrvscCodeBlockAdditionalThemesIdentifier = 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___identifier',
    ChildMarkdownRemarkChildGrvscCodeBlockAdditionalThemesConditions = 'childMarkdownRemark___childGrvscCodeBlock___additionalThemes___conditions',
    ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLines = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines',
    ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesTokens = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___tokens',
    ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesText = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___text',
    ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesHtml = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___html',
    ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesAttrs = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___attrs',
    ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesClassName = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___className',
    ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesData = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___data',
    ChildMarkdownRemarkChildGrvscCodeBlockTokenizedLinesIsHighlighted = 'childMarkdownRemark___childGrvscCodeBlock___tokenizedLines___isHighlighted',
    ChildMarkdownRemarkChildGrvscCodeBlockId = 'childMarkdownRemark___childGrvscCodeBlock___id',
    ChildMarkdownRemarkChildGrvscCodeBlockParentId = 'childMarkdownRemark___childGrvscCodeBlock___parent___id',
    ChildMarkdownRemarkChildGrvscCodeBlockParentChildren = 'childMarkdownRemark___childGrvscCodeBlock___parent___children',
    ChildMarkdownRemarkChildGrvscCodeBlockChildren = 'childMarkdownRemark___childGrvscCodeBlock___children',
    ChildMarkdownRemarkChildGrvscCodeBlockChildrenId = 'childMarkdownRemark___childGrvscCodeBlock___children___id',
    ChildMarkdownRemarkChildGrvscCodeBlockChildrenChildren = 'childMarkdownRemark___childGrvscCodeBlock___children___children',
    ChildMarkdownRemarkChildGrvscCodeBlockInternalContent = 'childMarkdownRemark___childGrvscCodeBlock___internal___content',
    ChildMarkdownRemarkChildGrvscCodeBlockInternalContentDigest = 'childMarkdownRemark___childGrvscCodeBlock___internal___contentDigest',
    ChildMarkdownRemarkChildGrvscCodeBlockInternalDescription = 'childMarkdownRemark___childGrvscCodeBlock___internal___description',
    ChildMarkdownRemarkChildGrvscCodeBlockInternalFieldOwners = 'childMarkdownRemark___childGrvscCodeBlock___internal___fieldOwners',
    ChildMarkdownRemarkChildGrvscCodeBlockInternalIgnoreType = 'childMarkdownRemark___childGrvscCodeBlock___internal___ignoreType',
    ChildMarkdownRemarkChildGrvscCodeBlockInternalMediaType = 'childMarkdownRemark___childGrvscCodeBlock___internal___mediaType',
    ChildMarkdownRemarkChildGrvscCodeBlockInternalOwner = 'childMarkdownRemark___childGrvscCodeBlock___internal___owner',
    ChildMarkdownRemarkChildGrvscCodeBlockInternalType = 'childMarkdownRemark___childGrvscCodeBlock___internal___type',
  }

  type FileFilterInput = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childDataJson?: Maybe<DataJsonFilterInput>;
    childrenSkillsJson?: Maybe<SkillsJsonFilterListInput>;
    childrenNavigationJson?: Maybe<NavigationJsonFilterListInput>;
    childrenTechnologiesJson?: Maybe<TechnologiesJsonFilterListInput>;
    childGmapsJson?: Maybe<GmapsJsonFilterInput>;
    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  };

  type FileGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type FileSortInput = {
    fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type FloatQueryOperatorInput = {
    eq?: Maybe<Scalars['Float']>;
    ne?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    in?: Maybe<Array<Maybe<Scalars['Float']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
  };

  type Frontmatter = {
    date: Scalars['String'];
    keywords: Scalars['String'];
    slug: Scalars['String'];
    tags: Array<Scalars['String']>;
    title: Scalars['String'];
  };

  type FrontmatterFilterInput = {
    date?: Maybe<StringQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    slug?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
  };

  type GmapsJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    styles?: Maybe<GmapsJsonStyles>;
  };

  type GmapsJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<GmapsJsonEdge>;
    nodes: Array<GmapsJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<GmapsJsonGroupConnection>;
  };

  type GmapsJsonConnectionDistinctArgs = {
    field: GmapsJsonFieldsEnum;
  };

  type GmapsJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: GmapsJsonFieldsEnum;
  };

  type GmapsJsonEdge = {
    next?: Maybe<GmapsJson>;
    node: GmapsJson;
    previous?: Maybe<GmapsJson>;
  };

  enum GmapsJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    StylesDark = 'styles___dark',
    StylesDarkElementType = 'styles___dark___elementType',
    StylesDarkStylers = 'styles___dark___stylers',
    StylesDarkStylersColor = 'styles___dark___stylers___color',
    StylesDarkFeatureType = 'styles___dark___featureType',
    StylesLight = 'styles___light',
    StylesLightElementType = 'styles___light___elementType',
    StylesLightStylers = 'styles___light___stylers',
    StylesLightStylersColor = 'styles___light___stylers___color',
    StylesLightFeatureType = 'styles___light___featureType',
  }

  type GmapsJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    styles?: Maybe<GmapsJsonStylesFilterInput>;
  };

  type GmapsJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<GmapsJsonEdge>;
    nodes: Array<GmapsJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type GmapsJsonSortInput = {
    fields?: Maybe<Array<Maybe<GmapsJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type GmapsJsonStyles = {
    dark?: Maybe<Array<Maybe<GmapsJsonStylesDark>>>;
    light?: Maybe<Array<Maybe<GmapsJsonStylesLight>>>;
  };

  type GmapsJsonStylesDark = {
    elementType?: Maybe<Scalars['String']>;
    stylers?: Maybe<Array<Maybe<GmapsJsonStylesDarkStylers>>>;
    featureType?: Maybe<Scalars['String']>;
  };

  type GmapsJsonStylesDarkFilterInput = {
    elementType?: Maybe<StringQueryOperatorInput>;
    stylers?: Maybe<GmapsJsonStylesDarkStylersFilterListInput>;
    featureType?: Maybe<StringQueryOperatorInput>;
  };

  type GmapsJsonStylesDarkFilterListInput = {
    elemMatch?: Maybe<GmapsJsonStylesDarkFilterInput>;
  };

  type GmapsJsonStylesDarkStylers = {
    color?: Maybe<Scalars['String']>;
  };

  type GmapsJsonStylesDarkStylersFilterInput = {
    color?: Maybe<StringQueryOperatorInput>;
  };

  type GmapsJsonStylesDarkStylersFilterListInput = {
    elemMatch?: Maybe<GmapsJsonStylesDarkStylersFilterInput>;
  };

  type GmapsJsonStylesFilterInput = {
    dark?: Maybe<GmapsJsonStylesDarkFilterListInput>;
    light?: Maybe<GmapsJsonStylesLightFilterListInput>;
  };

  type GmapsJsonStylesLight = {
    elementType?: Maybe<Scalars['String']>;
    stylers?: Maybe<Array<Maybe<GmapsJsonStylesLightStylers>>>;
    featureType?: Maybe<Scalars['String']>;
  };

  type GmapsJsonStylesLightFilterInput = {
    elementType?: Maybe<StringQueryOperatorInput>;
    stylers?: Maybe<GmapsJsonStylesLightStylersFilterListInput>;
    featureType?: Maybe<StringQueryOperatorInput>;
  };

  type GmapsJsonStylesLightFilterListInput = {
    elemMatch?: Maybe<GmapsJsonStylesLightFilterInput>;
  };

  type GmapsJsonStylesLightStylers = {
    color?: Maybe<Scalars['String']>;
  };

  type GmapsJsonStylesLightStylersFilterInput = {
    color?: Maybe<StringQueryOperatorInput>;
  };

  type GmapsJsonStylesLightStylersFilterListInput = {
    elemMatch?: Maybe<GmapsJsonStylesLightStylersFilterInput>;
  };

  type GrvscCodeBlock = Node & {
    index: Scalars['Int'];
    html: Scalars['String'];
    text: Scalars['String'];
    preClassName: Scalars['String'];
    codeClassName: Scalars['String'];
    language?: Maybe<Scalars['String']>;
    meta?: Maybe<Scalars['JSON']>;
    defaultTheme: GrvscTheme;
    additionalThemes: Array<GrvscTheme>;
    tokenizedLines?: Maybe<Array<GrvscTokenizedLine>>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

  type GrvscCodeBlockConnection = {
    totalCount: Scalars['Int'];
    edges: Array<GrvscCodeBlockEdge>;
    nodes: Array<GrvscCodeBlock>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<GrvscCodeBlockGroupConnection>;
  };

  type GrvscCodeBlockConnectionDistinctArgs = {
    field: GrvscCodeBlockFieldsEnum;
  };

  type GrvscCodeBlockConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: GrvscCodeBlockFieldsEnum;
  };

  type GrvscCodeBlockEdge = {
    next?: Maybe<GrvscCodeBlock>;
    node: GrvscCodeBlock;
    previous?: Maybe<GrvscCodeBlock>;
  };

  enum GrvscCodeBlockFieldsEnum {
    Index = 'index',
    Html = 'html',
    Text = 'text',
    PreClassName = 'preClassName',
    CodeClassName = 'codeClassName',
    Language = 'language',
    Meta = 'meta',
    DefaultThemePath = 'defaultTheme___path',
    DefaultThemeIdentifier = 'defaultTheme___identifier',
    DefaultThemeConditions = 'defaultTheme___conditions',
    DefaultThemeConditionsCondition = 'defaultTheme___conditions___condition',
    DefaultThemeConditionsValue = 'defaultTheme___conditions___value',
    AdditionalThemes = 'additionalThemes',
    AdditionalThemesPath = 'additionalThemes___path',
    AdditionalThemesIdentifier = 'additionalThemes___identifier',
    AdditionalThemesConditions = 'additionalThemes___conditions',
    AdditionalThemesConditionsCondition = 'additionalThemes___conditions___condition',
    AdditionalThemesConditionsValue = 'additionalThemes___conditions___value',
    TokenizedLines = 'tokenizedLines',
    TokenizedLinesTokens = 'tokenizedLines___tokens',
    TokenizedLinesTokensText = 'tokenizedLines___tokens___text',
    TokenizedLinesTokensStartIndex = 'tokenizedLines___tokens___startIndex',
    TokenizedLinesTokensEndIndex = 'tokenizedLines___tokens___endIndex',
    TokenizedLinesTokensScopes = 'tokenizedLines___tokens___scopes',
    TokenizedLinesTokensHtml = 'tokenizedLines___tokens___html',
    TokenizedLinesTokensClassName = 'tokenizedLines___tokens___className',
    TokenizedLinesTokensDefaultThemeTokenDataThemeIdentifier = 'tokenizedLines___tokens___defaultThemeTokenData___themeIdentifier',
    TokenizedLinesTokensDefaultThemeTokenDataClassName = 'tokenizedLines___tokens___defaultThemeTokenData___className',
    TokenizedLinesTokensDefaultThemeTokenDataMeta = 'tokenizedLines___tokens___defaultThemeTokenData___meta',
    TokenizedLinesTokensDefaultThemeTokenDataColor = 'tokenizedLines___tokens___defaultThemeTokenData___color',
    TokenizedLinesTokensDefaultThemeTokenDataBold = 'tokenizedLines___tokens___defaultThemeTokenData___bold',
    TokenizedLinesTokensDefaultThemeTokenDataItalic = 'tokenizedLines___tokens___defaultThemeTokenData___italic',
    TokenizedLinesTokensDefaultThemeTokenDataUnderline = 'tokenizedLines___tokens___defaultThemeTokenData___underline',
    TokenizedLinesTokensAdditionalThemeTokenData = 'tokenizedLines___tokens___additionalThemeTokenData',
    TokenizedLinesTokensAdditionalThemeTokenDataThemeIdentifier = 'tokenizedLines___tokens___additionalThemeTokenData___themeIdentifier',
    TokenizedLinesTokensAdditionalThemeTokenDataClassName = 'tokenizedLines___tokens___additionalThemeTokenData___className',
    TokenizedLinesTokensAdditionalThemeTokenDataMeta = 'tokenizedLines___tokens___additionalThemeTokenData___meta',
    TokenizedLinesTokensAdditionalThemeTokenDataColor = 'tokenizedLines___tokens___additionalThemeTokenData___color',
    TokenizedLinesTokensAdditionalThemeTokenDataBold = 'tokenizedLines___tokens___additionalThemeTokenData___bold',
    TokenizedLinesTokensAdditionalThemeTokenDataItalic = 'tokenizedLines___tokens___additionalThemeTokenData___italic',
    TokenizedLinesTokensAdditionalThemeTokenDataUnderline = 'tokenizedLines___tokens___additionalThemeTokenData___underline',
    TokenizedLinesText = 'tokenizedLines___text',
    TokenizedLinesHtml = 'tokenizedLines___html',
    TokenizedLinesAttrs = 'tokenizedLines___attrs',
    TokenizedLinesClassName = 'tokenizedLines___className',
    TokenizedLinesData = 'tokenizedLines___data',
    TokenizedLinesIsHighlighted = 'tokenizedLines___isHighlighted',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
  }

  type GrvscCodeBlockFilterInput = {
    index?: Maybe<IntQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    text?: Maybe<StringQueryOperatorInput>;
    preClassName?: Maybe<StringQueryOperatorInput>;
    codeClassName?: Maybe<StringQueryOperatorInput>;
    language?: Maybe<StringQueryOperatorInput>;
    meta?: Maybe<JsonQueryOperatorInput>;
    defaultTheme?: Maybe<GrvscThemeFilterInput>;
    additionalThemes?: Maybe<GrvscThemeFilterListInput>;
    tokenizedLines?: Maybe<GrvscTokenizedLineFilterListInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type GrvscCodeBlockGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<GrvscCodeBlockEdge>;
    nodes: Array<GrvscCodeBlock>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type GrvscCodeBlockSortInput = {
    fields?: Maybe<Array<Maybe<GrvscCodeBlockFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type GrvscStylesheet = Node & {
    css: Scalars['String'];
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

  type GrvscStylesheetConnection = {
    totalCount: Scalars['Int'];
    edges: Array<GrvscStylesheetEdge>;
    nodes: Array<GrvscStylesheet>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<GrvscStylesheetGroupConnection>;
  };

  type GrvscStylesheetConnectionDistinctArgs = {
    field: GrvscStylesheetFieldsEnum;
  };

  type GrvscStylesheetConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: GrvscStylesheetFieldsEnum;
  };

  type GrvscStylesheetEdge = {
    next?: Maybe<GrvscStylesheet>;
    node: GrvscStylesheet;
    previous?: Maybe<GrvscStylesheet>;
  };

  enum GrvscStylesheetFieldsEnum {
    Css = 'css',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
  }

  type GrvscStylesheetFilterInput = {
    css?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type GrvscStylesheetGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<GrvscStylesheetEdge>;
    nodes: Array<GrvscStylesheet>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type GrvscStylesheetSortInput = {
    fields?: Maybe<Array<Maybe<GrvscStylesheetFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type GrvscTheme = {
    path: Scalars['String'];
    identifier: Scalars['String'];
    conditions: Array<GrvscThemeCondition>;
  };

  type GrvscThemeArgument = {
    identifier: Scalars['String'];
    conditions: Array<Scalars['String']>;
  };

  type GrvscThemeCondition = {
    condition: GrvscThemeConditionKind;
    value?: Maybe<Scalars['String']>;
  };

  type GrvscThemeConditionFilterInput = {
    condition?: Maybe<GrvscThemeConditionKindQueryOperatorInput>;
    value?: Maybe<StringQueryOperatorInput>;
  };

  type GrvscThemeConditionFilterListInput = {
    elemMatch?: Maybe<GrvscThemeConditionFilterInput>;
  };

  enum GrvscThemeConditionKind {
    Default = 'default',
    MatchMedia = 'matchMedia',
    ParentSelector = 'parentSelector',
  }

  type GrvscThemeConditionKindQueryOperatorInput = {
    eq?: Maybe<GrvscThemeConditionKind>;
    ne?: Maybe<GrvscThemeConditionKind>;
    in?: Maybe<Array<Maybe<GrvscThemeConditionKind>>>;
    nin?: Maybe<Array<Maybe<GrvscThemeConditionKind>>>;
  };

  type GrvscThemeFilterInput = {
    path?: Maybe<StringQueryOperatorInput>;
    identifier?: Maybe<StringQueryOperatorInput>;
    conditions?: Maybe<GrvscThemeConditionFilterListInput>;
  };

  type GrvscThemeFilterListInput = {
    elemMatch?: Maybe<GrvscThemeFilterInput>;
  };

  type GrvscThemeTokenData = {
    themeIdentifier: Scalars['String'];
    className: Scalars['String'];
    meta: Scalars['Int'];
    color: Scalars['String'];
    bold: Scalars['Boolean'];
    italic: Scalars['Boolean'];
    underline: Scalars['Boolean'];
  };

  type GrvscThemeTokenDataFilterInput = {
    themeIdentifier?: Maybe<StringQueryOperatorInput>;
    className?: Maybe<StringQueryOperatorInput>;
    meta?: Maybe<IntQueryOperatorInput>;
    color?: Maybe<StringQueryOperatorInput>;
    bold?: Maybe<BooleanQueryOperatorInput>;
    italic?: Maybe<BooleanQueryOperatorInput>;
    underline?: Maybe<BooleanQueryOperatorInput>;
  };

  type GrvscThemeTokenDataFilterListInput = {
    elemMatch?: Maybe<GrvscThemeTokenDataFilterInput>;
  };

  type GrvscToken = {
    text: Scalars['String'];
    startIndex: Scalars['Int'];
    endIndex: Scalars['Int'];
    scopes: Array<Scalars['String']>;
    html: Scalars['String'];
    className: Scalars['String'];
    defaultThemeTokenData: GrvscThemeTokenData;
    additionalThemeTokenData: Array<GrvscThemeTokenData>;
  };

  type GrvscTokenFilterInput = {
    text?: Maybe<StringQueryOperatorInput>;
    startIndex?: Maybe<IntQueryOperatorInput>;
    endIndex?: Maybe<IntQueryOperatorInput>;
    scopes?: Maybe<StringQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    className?: Maybe<StringQueryOperatorInput>;
    defaultThemeTokenData?: Maybe<GrvscThemeTokenDataFilterInput>;
    additionalThemeTokenData?: Maybe<GrvscThemeTokenDataFilterListInput>;
  };

  type GrvscTokenFilterListInput = {
    elemMatch?: Maybe<GrvscTokenFilterInput>;
  };

  type GrvscTokenizedLine = {
    tokens: Array<GrvscToken>;
    text: Scalars['String'];
    html: Scalars['String'];
    attrs: Scalars['JSON'];
    className: Scalars['String'];
    data: Scalars['JSON'];
    isHighlighted?: Maybe<Scalars['Boolean']>;
  };

  type GrvscTokenizedLineFilterInput = {
    tokens?: Maybe<GrvscTokenFilterListInput>;
    text?: Maybe<StringQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    attrs?: Maybe<JsonQueryOperatorInput>;
    className?: Maybe<StringQueryOperatorInput>;
    data?: Maybe<JsonQueryOperatorInput>;
    isHighlighted?: Maybe<BooleanQueryOperatorInput>;
  };

  type GrvscTokenizedLineFilterListInput = {
    elemMatch?: Maybe<GrvscTokenizedLineFilterInput>;
  };

  enum ImageCropFocus {
    Center = 'CENTER',
    North = 'NORTH',
    Northeast = 'NORTHEAST',
    East = 'EAST',
    Southeast = 'SOUTHEAST',
    South = 'SOUTH',
    Southwest = 'SOUTHWEST',
    West = 'WEST',
    Northwest = 'NORTHWEST',
    Entropy = 'ENTROPY',
    Attention = 'ATTENTION',
  }

  enum ImageFit {
    Cover = 'COVER',
    Contain = 'CONTAIN',
    Fill = 'FILL',
  }

  enum ImageFormat {
    NoChange = 'NO_CHANGE',
    Jpg = 'JPG',
    Png = 'PNG',
    Webp = 'WEBP',
  }

  type ImageSharp = Node & {
    fixed?: Maybe<ImageSharpFixed>;
    resolutions?: Maybe<ImageSharpResolutions>;
    fluid?: Maybe<ImageSharpFluid>;
    sizes?: Maybe<ImageSharpSizes>;
    original?: Maybe<ImageSharpOriginal>;
    resize?: Maybe<ImageSharpResize>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

  type ImageSharpFixedArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharpResolutionsArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharpFluidArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  };

  type ImageSharpSizesArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  };

  type ImageSharpResizeArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionLevel?: Maybe<Scalars['Int']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    base64?: Maybe<Scalars['Boolean']>;
    traceSVG?: Maybe<Potrace>;
    toFormat?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
  };

  type ImageSharpConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<ImageSharpGroupConnection>;
  };

  type ImageSharpConnectionDistinctArgs = {
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: ImageSharpFieldsEnum;
  };

  type ImageSharpEdge = {
    next?: Maybe<ImageSharp>;
    node: ImageSharp;
    previous?: Maybe<ImageSharp>;
  };

  enum ImageSharpFieldsEnum {
    FixedBase64 = 'fixed___base64',
    FixedTracedSvg = 'fixed___tracedSVG',
    FixedAspectRatio = 'fixed___aspectRatio',
    FixedWidth = 'fixed___width',
    FixedHeight = 'fixed___height',
    FixedSrc = 'fixed___src',
    FixedSrcSet = 'fixed___srcSet',
    FixedSrcWebp = 'fixed___srcWebp',
    FixedSrcSetWebp = 'fixed___srcSetWebp',
    FixedOriginalName = 'fixed___originalName',
    ResolutionsBase64 = 'resolutions___base64',
    ResolutionsTracedSvg = 'resolutions___tracedSVG',
    ResolutionsAspectRatio = 'resolutions___aspectRatio',
    ResolutionsWidth = 'resolutions___width',
    ResolutionsHeight = 'resolutions___height',
    ResolutionsSrc = 'resolutions___src',
    ResolutionsSrcSet = 'resolutions___srcSet',
    ResolutionsSrcWebp = 'resolutions___srcWebp',
    ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
    ResolutionsOriginalName = 'resolutions___originalName',
    FluidBase64 = 'fluid___base64',
    FluidTracedSvg = 'fluid___tracedSVG',
    FluidAspectRatio = 'fluid___aspectRatio',
    FluidSrc = 'fluid___src',
    FluidSrcSet = 'fluid___srcSet',
    FluidSrcWebp = 'fluid___srcWebp',
    FluidSrcSetWebp = 'fluid___srcSetWebp',
    FluidSizes = 'fluid___sizes',
    FluidOriginalImg = 'fluid___originalImg',
    FluidOriginalName = 'fluid___originalName',
    FluidPresentationWidth = 'fluid___presentationWidth',
    FluidPresentationHeight = 'fluid___presentationHeight',
    SizesBase64 = 'sizes___base64',
    SizesTracedSvg = 'sizes___tracedSVG',
    SizesAspectRatio = 'sizes___aspectRatio',
    SizesSrc = 'sizes___src',
    SizesSrcSet = 'sizes___srcSet',
    SizesSrcWebp = 'sizes___srcWebp',
    SizesSrcSetWebp = 'sizes___srcSetWebp',
    SizesSizes = 'sizes___sizes',
    SizesOriginalImg = 'sizes___originalImg',
    SizesOriginalName = 'sizes___originalName',
    SizesPresentationWidth = 'sizes___presentationWidth',
    SizesPresentationHeight = 'sizes___presentationHeight',
    OriginalWidth = 'original___width',
    OriginalHeight = 'original___height',
    OriginalSrc = 'original___src',
    ResizeSrc = 'resize___src',
    ResizeTracedSvg = 'resize___tracedSVG',
    ResizeWidth = 'resize___width',
    ResizeHeight = 'resize___height',
    ResizeAspectRatio = 'resize___aspectRatio',
    ResizeOriginalName = 'resize___originalName',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
  }

  type ImageSharpFilterInput = {
    fixed?: Maybe<ImageSharpFixedFilterInput>;
    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
    fluid?: Maybe<ImageSharpFluidFilterInput>;
    sizes?: Maybe<ImageSharpSizesFilterInput>;
    original?: Maybe<ImageSharpOriginalFilterInput>;
    resize?: Maybe<ImageSharpResizeFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type ImageSharpFixed = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    width: Scalars['Float'];
    height: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
  };

  type ImageSharpFixedFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpFluid = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    sizes: Scalars['String'];
    originalImg?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
    presentationWidth?: Maybe<Scalars['Int']>;
    presentationHeight?: Maybe<Scalars['Int']>;
  };

  type ImageSharpFluidFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalImg?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
    presentationWidth?: Maybe<IntQueryOperatorInput>;
    presentationHeight?: Maybe<IntQueryOperatorInput>;
  };

  type ImageSharpGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type ImageSharpOriginal = {
    width?: Maybe<Scalars['Float']>;
    height?: Maybe<Scalars['Float']>;
    src?: Maybe<Scalars['String']>;
  };

  type ImageSharpOriginalFilterInput = {
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpResize = {
    src?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    originalName?: Maybe<Scalars['String']>;
  };

  type ImageSharpResizeFilterInput = {
    src?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    width?: Maybe<IntQueryOperatorInput>;
    height?: Maybe<IntQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpResolutions = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    width: Scalars['Float'];
    height: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
  };

  type ImageSharpResolutionsFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpSizes = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    sizes: Scalars['String'];
    originalImg?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
    presentationWidth?: Maybe<Scalars['Int']>;
    presentationHeight?: Maybe<Scalars['Int']>;
  };

  type ImageSharpSizesFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalImg?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
    presentationWidth?: Maybe<IntQueryOperatorInput>;
    presentationHeight?: Maybe<IntQueryOperatorInput>;
  };

  type ImageSharpSortInput = {
    fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type Internal = {
    content?: Maybe<Scalars['String']>;
    contentDigest: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
    ignoreType?: Maybe<Scalars['Boolean']>;
    mediaType?: Maybe<Scalars['String']>;
    owner: Scalars['String'];
    type: Scalars['String'];
  };

  type InternalFilterInput = {
    content?: Maybe<StringQueryOperatorInput>;
    contentDigest?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    fieldOwners?: Maybe<StringQueryOperatorInput>;
    ignoreType?: Maybe<BooleanQueryOperatorInput>;
    mediaType?: Maybe<StringQueryOperatorInput>;
    owner?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
  };

  type IntQueryOperatorInput = {
    eq?: Maybe<Scalars['Int']>;
    ne?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Maybe<Scalars['Int']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  };

  type JsonQueryOperatorInput = {
    eq?: Maybe<Scalars['JSON']>;
    ne?: Maybe<Scalars['JSON']>;
    in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
    nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
    regex?: Maybe<Scalars['JSON']>;
    glob?: Maybe<Scalars['JSON']>;
  };

  enum MarkdownExcerptFormats {
    Plain = 'PLAIN',
    Html = 'HTML',
    Markdown = 'MARKDOWN',
  }

  type MarkdownHeading = {
    value?: Maybe<Scalars['String']>;
    depth?: Maybe<Scalars['Int']>;
  };

  type MarkdownHeadingFilterInput = {
    value?: Maybe<StringQueryOperatorInput>;
    depth?: Maybe<IntQueryOperatorInput>;
  };

  type MarkdownHeadingFilterListInput = {
    elemMatch?: Maybe<MarkdownHeadingFilterInput>;
  };

  enum MarkdownHeadingLevels {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
  }

  type MarkdownRemark = Node & {
    id: Scalars['ID'];
    frontmatter: Frontmatter;
    excerpt?: Maybe<Scalars['String']>;
    rawMarkdownBody?: Maybe<Scalars['String']>;
    fileAbsolutePath?: Maybe<Scalars['String']>;
    html?: Maybe<Scalars['String']>;
    htmlAst?: Maybe<Scalars['JSON']>;
    excerptAst?: Maybe<Scalars['JSON']>;
    headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
    timeToRead?: Maybe<Scalars['Int']>;
    tableOfContents?: Maybe<Scalars['String']>;
    wordCount?: Maybe<MarkdownWordCount>;
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    childGrvscCodeBlock?: Maybe<GrvscCodeBlock>;
    grvscCodeBlocks?: Maybe<Array<Maybe<GrvscCodeBlock>>>;
  };

  type MarkdownRemarkExcerptArgs = {
    pruneLength?: Maybe<Scalars['Int']>;
    truncate?: Maybe<Scalars['Boolean']>;
    format?: Maybe<MarkdownExcerptFormats>;
  };

  type MarkdownRemarkExcerptAstArgs = {
    pruneLength?: Maybe<Scalars['Int']>;
    truncate?: Maybe<Scalars['Boolean']>;
  };

  type MarkdownRemarkHeadingsArgs = {
    depth?: Maybe<MarkdownHeadingLevels>;
  };

  type MarkdownRemarkTableOfContentsArgs = {
    absolute?: Maybe<Scalars['Boolean']>;
    pathToSlugField?: Maybe<Scalars['String']>;
    maxDepth?: Maybe<Scalars['Int']>;
    heading?: Maybe<Scalars['String']>;
  };

  type MarkdownRemarkConnection = {
    totalCount: Scalars['Int'];
    edges: Array<MarkdownRemarkEdge>;
    nodes: Array<MarkdownRemark>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<MarkdownRemarkGroupConnection>;
  };

  type MarkdownRemarkConnectionDistinctArgs = {
    field: MarkdownRemarkFieldsEnum;
  };

  type MarkdownRemarkConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: MarkdownRemarkFieldsEnum;
  };

  type MarkdownRemarkEdge = {
    next?: Maybe<MarkdownRemark>;
    node: MarkdownRemark;
    previous?: Maybe<MarkdownRemark>;
  };

  enum MarkdownRemarkFieldsEnum {
    Id = 'id',
    FrontmatterDate = 'frontmatter___date',
    FrontmatterKeywords = 'frontmatter___keywords',
    FrontmatterSlug = 'frontmatter___slug',
    FrontmatterTags = 'frontmatter___tags',
    FrontmatterTitle = 'frontmatter___title',
    Excerpt = 'excerpt',
    RawMarkdownBody = 'rawMarkdownBody',
    FileAbsolutePath = 'fileAbsolutePath',
    Html = 'html',
    HtmlAst = 'htmlAst',
    ExcerptAst = 'excerptAst',
    Headings = 'headings',
    HeadingsValue = 'headings___value',
    HeadingsDepth = 'headings___depth',
    TimeToRead = 'timeToRead',
    TableOfContents = 'tableOfContents',
    WordCountParagraphs = 'wordCount___paragraphs',
    WordCountSentences = 'wordCount___sentences',
    WordCountWords = 'wordCount___words',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    ChildGrvscCodeBlockIndex = 'childGrvscCodeBlock___index',
    ChildGrvscCodeBlockHtml = 'childGrvscCodeBlock___html',
    ChildGrvscCodeBlockText = 'childGrvscCodeBlock___text',
    ChildGrvscCodeBlockPreClassName = 'childGrvscCodeBlock___preClassName',
    ChildGrvscCodeBlockCodeClassName = 'childGrvscCodeBlock___codeClassName',
    ChildGrvscCodeBlockLanguage = 'childGrvscCodeBlock___language',
    ChildGrvscCodeBlockMeta = 'childGrvscCodeBlock___meta',
    ChildGrvscCodeBlockDefaultThemePath = 'childGrvscCodeBlock___defaultTheme___path',
    ChildGrvscCodeBlockDefaultThemeIdentifier = 'childGrvscCodeBlock___defaultTheme___identifier',
    ChildGrvscCodeBlockDefaultThemeConditions = 'childGrvscCodeBlock___defaultTheme___conditions',
    ChildGrvscCodeBlockDefaultThemeConditionsCondition = 'childGrvscCodeBlock___defaultTheme___conditions___condition',
    ChildGrvscCodeBlockDefaultThemeConditionsValue = 'childGrvscCodeBlock___defaultTheme___conditions___value',
    ChildGrvscCodeBlockAdditionalThemes = 'childGrvscCodeBlock___additionalThemes',
    ChildGrvscCodeBlockAdditionalThemesPath = 'childGrvscCodeBlock___additionalThemes___path',
    ChildGrvscCodeBlockAdditionalThemesIdentifier = 'childGrvscCodeBlock___additionalThemes___identifier',
    ChildGrvscCodeBlockAdditionalThemesConditions = 'childGrvscCodeBlock___additionalThemes___conditions',
    ChildGrvscCodeBlockAdditionalThemesConditionsCondition = 'childGrvscCodeBlock___additionalThemes___conditions___condition',
    ChildGrvscCodeBlockAdditionalThemesConditionsValue = 'childGrvscCodeBlock___additionalThemes___conditions___value',
    ChildGrvscCodeBlockTokenizedLines = 'childGrvscCodeBlock___tokenizedLines',
    ChildGrvscCodeBlockTokenizedLinesTokens = 'childGrvscCodeBlock___tokenizedLines___tokens',
    ChildGrvscCodeBlockTokenizedLinesTokensText = 'childGrvscCodeBlock___tokenizedLines___tokens___text',
    ChildGrvscCodeBlockTokenizedLinesTokensStartIndex = 'childGrvscCodeBlock___tokenizedLines___tokens___startIndex',
    ChildGrvscCodeBlockTokenizedLinesTokensEndIndex = 'childGrvscCodeBlock___tokenizedLines___tokens___endIndex',
    ChildGrvscCodeBlockTokenizedLinesTokensScopes = 'childGrvscCodeBlock___tokenizedLines___tokens___scopes',
    ChildGrvscCodeBlockTokenizedLinesTokensHtml = 'childGrvscCodeBlock___tokenizedLines___tokens___html',
    ChildGrvscCodeBlockTokenizedLinesTokensClassName = 'childGrvscCodeBlock___tokenizedLines___tokens___className',
    ChildGrvscCodeBlockTokenizedLinesTokensAdditionalThemeTokenData = 'childGrvscCodeBlock___tokenizedLines___tokens___additionalThemeTokenData',
    ChildGrvscCodeBlockTokenizedLinesText = 'childGrvscCodeBlock___tokenizedLines___text',
    ChildGrvscCodeBlockTokenizedLinesHtml = 'childGrvscCodeBlock___tokenizedLines___html',
    ChildGrvscCodeBlockTokenizedLinesAttrs = 'childGrvscCodeBlock___tokenizedLines___attrs',
    ChildGrvscCodeBlockTokenizedLinesClassName = 'childGrvscCodeBlock___tokenizedLines___className',
    ChildGrvscCodeBlockTokenizedLinesData = 'childGrvscCodeBlock___tokenizedLines___data',
    ChildGrvscCodeBlockTokenizedLinesIsHighlighted = 'childGrvscCodeBlock___tokenizedLines___isHighlighted',
    ChildGrvscCodeBlockId = 'childGrvscCodeBlock___id',
    ChildGrvscCodeBlockParentId = 'childGrvscCodeBlock___parent___id',
    ChildGrvscCodeBlockParentParentId = 'childGrvscCodeBlock___parent___parent___id',
    ChildGrvscCodeBlockParentParentChildren = 'childGrvscCodeBlock___parent___parent___children',
    ChildGrvscCodeBlockParentChildren = 'childGrvscCodeBlock___parent___children',
    ChildGrvscCodeBlockParentChildrenId = 'childGrvscCodeBlock___parent___children___id',
    ChildGrvscCodeBlockParentChildrenChildren = 'childGrvscCodeBlock___parent___children___children',
    ChildGrvscCodeBlockParentInternalContent = 'childGrvscCodeBlock___parent___internal___content',
    ChildGrvscCodeBlockParentInternalContentDigest = 'childGrvscCodeBlock___parent___internal___contentDigest',
    ChildGrvscCodeBlockParentInternalDescription = 'childGrvscCodeBlock___parent___internal___description',
    ChildGrvscCodeBlockParentInternalFieldOwners = 'childGrvscCodeBlock___parent___internal___fieldOwners',
    ChildGrvscCodeBlockParentInternalIgnoreType = 'childGrvscCodeBlock___parent___internal___ignoreType',
    ChildGrvscCodeBlockParentInternalMediaType = 'childGrvscCodeBlock___parent___internal___mediaType',
    ChildGrvscCodeBlockParentInternalOwner = 'childGrvscCodeBlock___parent___internal___owner',
    ChildGrvscCodeBlockParentInternalType = 'childGrvscCodeBlock___parent___internal___type',
    ChildGrvscCodeBlockChildren = 'childGrvscCodeBlock___children',
    ChildGrvscCodeBlockChildrenId = 'childGrvscCodeBlock___children___id',
    ChildGrvscCodeBlockChildrenParentId = 'childGrvscCodeBlock___children___parent___id',
    ChildGrvscCodeBlockChildrenParentChildren = 'childGrvscCodeBlock___children___parent___children',
    ChildGrvscCodeBlockChildrenChildren = 'childGrvscCodeBlock___children___children',
    ChildGrvscCodeBlockChildrenChildrenId = 'childGrvscCodeBlock___children___children___id',
    ChildGrvscCodeBlockChildrenChildrenChildren = 'childGrvscCodeBlock___children___children___children',
    ChildGrvscCodeBlockChildrenInternalContent = 'childGrvscCodeBlock___children___internal___content',
    ChildGrvscCodeBlockChildrenInternalContentDigest = 'childGrvscCodeBlock___children___internal___contentDigest',
    ChildGrvscCodeBlockChildrenInternalDescription = 'childGrvscCodeBlock___children___internal___description',
    ChildGrvscCodeBlockChildrenInternalFieldOwners = 'childGrvscCodeBlock___children___internal___fieldOwners',
    ChildGrvscCodeBlockChildrenInternalIgnoreType = 'childGrvscCodeBlock___children___internal___ignoreType',
    ChildGrvscCodeBlockChildrenInternalMediaType = 'childGrvscCodeBlock___children___internal___mediaType',
    ChildGrvscCodeBlockChildrenInternalOwner = 'childGrvscCodeBlock___children___internal___owner',
    ChildGrvscCodeBlockChildrenInternalType = 'childGrvscCodeBlock___children___internal___type',
    ChildGrvscCodeBlockInternalContent = 'childGrvscCodeBlock___internal___content',
    ChildGrvscCodeBlockInternalContentDigest = 'childGrvscCodeBlock___internal___contentDigest',
    ChildGrvscCodeBlockInternalDescription = 'childGrvscCodeBlock___internal___description',
    ChildGrvscCodeBlockInternalFieldOwners = 'childGrvscCodeBlock___internal___fieldOwners',
    ChildGrvscCodeBlockInternalIgnoreType = 'childGrvscCodeBlock___internal___ignoreType',
    ChildGrvscCodeBlockInternalMediaType = 'childGrvscCodeBlock___internal___mediaType',
    ChildGrvscCodeBlockInternalOwner = 'childGrvscCodeBlock___internal___owner',
    ChildGrvscCodeBlockInternalType = 'childGrvscCodeBlock___internal___type',
  }

  type MarkdownRemarkFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<FrontmatterFilterInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<MarkdownWordCountFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childGrvscCodeBlock?: Maybe<GrvscCodeBlockFilterInput>;
  };

  type MarkdownRemarkGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<MarkdownRemarkEdge>;
    nodes: Array<MarkdownRemark>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type MarkdownRemarkSortInput = {
    fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type MarkdownWordCount = {
    paragraphs?: Maybe<Scalars['Int']>;
    sentences?: Maybe<Scalars['Int']>;
    words?: Maybe<Scalars['Int']>;
  };

  type MarkdownWordCountFilterInput = {
    paragraphs?: Maybe<IntQueryOperatorInput>;
    sentences?: Maybe<IntQueryOperatorInput>;
    words?: Maybe<IntQueryOperatorInput>;
  };

  type NavigationJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    icon?: Maybe<Scalars['String']>;
    keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
    name?: Maybe<Scalars['String']>;
    navOrder?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['String']>;
    to?: Maybe<Scalars['String']>;
    ignoreInNavigation?: Maybe<Scalars['Boolean']>;
  };

  type NavigationJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<NavigationJsonEdge>;
    nodes: Array<NavigationJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<NavigationJsonGroupConnection>;
  };

  type NavigationJsonConnectionDistinctArgs = {
    field: NavigationJsonFieldsEnum;
  };

  type NavigationJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: NavigationJsonFieldsEnum;
  };

  type NavigationJsonEdge = {
    next?: Maybe<NavigationJson>;
    node: NavigationJson;
    previous?: Maybe<NavigationJson>;
  };

  enum NavigationJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Icon = 'icon',
    Keywords = 'keywords',
    Name = 'name',
    NavOrder = 'navOrder',
    Page = 'page',
    To = 'to',
    IgnoreInNavigation = 'ignoreInNavigation',
  }

  type NavigationJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    icon?: Maybe<StringQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    navOrder?: Maybe<IntQueryOperatorInput>;
    page?: Maybe<StringQueryOperatorInput>;
    to?: Maybe<StringQueryOperatorInput>;
    ignoreInNavigation?: Maybe<BooleanQueryOperatorInput>;
  };

  type NavigationJsonFilterListInput = {
    elemMatch?: Maybe<NavigationJsonFilterInput>;
  };

  type NavigationJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<NavigationJsonEdge>;
    nodes: Array<NavigationJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type NavigationJsonSortInput = {
    fields?: Maybe<Array<Maybe<NavigationJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type Node = {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
  };

  type NodeFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type NodeFilterListInput = {
    elemMatch?: Maybe<NodeFilterInput>;
  };

  type PageInfo = {
    currentPage: Scalars['Int'];
    hasPreviousPage: Scalars['Boolean'];
    hasNextPage: Scalars['Boolean'];
    itemCount: Scalars['Int'];
    pageCount: Scalars['Int'];
    perPage?: Maybe<Scalars['Int']>;
  };

  type Potrace = {
    turnPolicy?: Maybe<PotraceTurnPolicy>;
    turdSize?: Maybe<Scalars['Float']>;
    alphaMax?: Maybe<Scalars['Float']>;
    optCurve?: Maybe<Scalars['Boolean']>;
    optTolerance?: Maybe<Scalars['Float']>;
    threshold?: Maybe<Scalars['Int']>;
    blackOnWhite?: Maybe<Scalars['Boolean']>;
    color?: Maybe<Scalars['String']>;
    background?: Maybe<Scalars['String']>;
  };

  enum PotraceTurnPolicy {
    TurnpolicyBlack = 'TURNPOLICY_BLACK',
    TurnpolicyWhite = 'TURNPOLICY_WHITE',
    TurnpolicyLeft = 'TURNPOLICY_LEFT',
    TurnpolicyRight = 'TURNPOLICY_RIGHT',
    TurnpolicyMinority = 'TURNPOLICY_MINORITY',
    TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  }

  type Query = {
    file?: Maybe<File>;
    allFile: FileConnection;
    directory?: Maybe<Directory>;
    allDirectory: DirectoryConnection;
    sitePage?: Maybe<SitePage>;
    allSitePage: SitePageConnection;
    imageSharp?: Maybe<ImageSharp>;
    allImageSharp: ImageSharpConnection;
    markdownRemark?: Maybe<MarkdownRemark>;
    allMarkdownRemark: MarkdownRemarkConnection;
    grvscCodeBlock?: Maybe<GrvscCodeBlock>;
    allGrvscCodeBlock: GrvscCodeBlockConnection;
    grvscStylesheet?: Maybe<GrvscStylesheet>;
    allGrvscStylesheet: GrvscStylesheetConnection;
    dataJson?: Maybe<DataJson>;
    allDataJson: DataJsonConnection;
    gmapsJson?: Maybe<GmapsJson>;
    allGmapsJson: GmapsJsonConnection;
    technologiesJson?: Maybe<TechnologiesJson>;
    allTechnologiesJson: TechnologiesJsonConnection;
    navigationJson?: Maybe<NavigationJson>;
    allNavigationJson: NavigationJsonConnection;
    skillsJson?: Maybe<SkillsJson>;
    allSkillsJson: SkillsJsonConnection;
    site?: Maybe<Site>;
    allSite: SiteConnection;
    sitePlugin?: Maybe<SitePlugin>;
    allSitePlugin: SitePluginConnection;
    grvscHighlight?: Maybe<GrvscCodeBlock>;
  };

  type QueryFileArgs = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childDataJson?: Maybe<DataJsonFilterInput>;
    childrenSkillsJson?: Maybe<SkillsJsonFilterListInput>;
    childrenNavigationJson?: Maybe<NavigationJsonFilterListInput>;
    childrenTechnologiesJson?: Maybe<TechnologiesJsonFilterListInput>;
    childGmapsJson?: Maybe<GmapsJsonFilterInput>;
    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  };

  type QueryAllFileArgs = {
    filter?: Maybe<FileFilterInput>;
    sort?: Maybe<FileSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryDirectoryArgs = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type QueryAllDirectoryArgs = {
    filter?: Maybe<DirectoryFilterInput>;
    sort?: Maybe<DirectorySortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QuerySitePageArgs = {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
  };

  type QueryAllSitePageArgs = {
    filter?: Maybe<SitePageFilterInput>;
    sort?: Maybe<SitePageSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryImageSharpArgs = {
    fixed?: Maybe<ImageSharpFixedFilterInput>;
    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
    fluid?: Maybe<ImageSharpFluidFilterInput>;
    sizes?: Maybe<ImageSharpSizesFilterInput>;
    original?: Maybe<ImageSharpOriginalFilterInput>;
    resize?: Maybe<ImageSharpResizeFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type QueryAllImageSharpArgs = {
    filter?: Maybe<ImageSharpFilterInput>;
    sort?: Maybe<ImageSharpSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryMarkdownRemarkArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<FrontmatterFilterInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<MarkdownWordCountFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childGrvscCodeBlock?: Maybe<GrvscCodeBlockFilterInput>;
  };

  type QueryAllMarkdownRemarkArgs = {
    filter?: Maybe<MarkdownRemarkFilterInput>;
    sort?: Maybe<MarkdownRemarkSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryGrvscCodeBlockArgs = {
    index?: Maybe<IntQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    text?: Maybe<StringQueryOperatorInput>;
    preClassName?: Maybe<StringQueryOperatorInput>;
    codeClassName?: Maybe<StringQueryOperatorInput>;
    language?: Maybe<StringQueryOperatorInput>;
    meta?: Maybe<JsonQueryOperatorInput>;
    defaultTheme?: Maybe<GrvscThemeFilterInput>;
    additionalThemes?: Maybe<GrvscThemeFilterListInput>;
    tokenizedLines?: Maybe<GrvscTokenizedLineFilterListInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type QueryAllGrvscCodeBlockArgs = {
    filter?: Maybe<GrvscCodeBlockFilterInput>;
    sort?: Maybe<GrvscCodeBlockSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryGrvscStylesheetArgs = {
    defaultTheme?: Maybe<Scalars['String']>;
    additionalThemes?: Maybe<Array<GrvscThemeArgument>>;
    injectStyles?: Maybe<Scalars['Boolean']>;
  };

  type QueryAllGrvscStylesheetArgs = {
    filter?: Maybe<GrvscStylesheetFilterInput>;
    sort?: Maybe<GrvscStylesheetSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryDataJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    company?: Maybe<DataJsonCompanyFilterInput>;
    contacts?: Maybe<DataJsonContactsFilterListInput>;
    jobTitle?: Maybe<StringQueryOperatorInput>;
    location?: Maybe<DataJsonLocationFilterInput>;
    openToGigs?: Maybe<BooleanQueryOperatorInput>;
    resumeLink?: Maybe<StringQueryOperatorInput>;
  };

  type QueryAllDataJsonArgs = {
    filter?: Maybe<DataJsonFilterInput>;
    sort?: Maybe<DataJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryGmapsJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    styles?: Maybe<GmapsJsonStylesFilterInput>;
  };

  type QueryAllGmapsJsonArgs = {
    filter?: Maybe<GmapsJsonFilterInput>;
    sort?: Maybe<GmapsJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryTechnologiesJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    img?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    website?: Maybe<StringQueryOperatorInput>;
  };

  type QueryAllTechnologiesJsonArgs = {
    filter?: Maybe<TechnologiesJsonFilterInput>;
    sort?: Maybe<TechnologiesJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryNavigationJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    icon?: Maybe<StringQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    navOrder?: Maybe<IntQueryOperatorInput>;
    page?: Maybe<StringQueryOperatorInput>;
    to?: Maybe<StringQueryOperatorInput>;
    ignoreInNavigation?: Maybe<BooleanQueryOperatorInput>;
  };

  type QueryAllNavigationJsonArgs = {
    filter?: Maybe<NavigationJsonFilterInput>;
    sort?: Maybe<NavigationJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QuerySkillsJsonArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    name?: Maybe<StringQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
    items?: Maybe<SkillsJsonItemsFilterListInput>;
  };

  type QueryAllSkillsJsonArgs = {
    filter?: Maybe<SkillsJsonFilterInput>;
    sort?: Maybe<SkillsJsonSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QuerySiteArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
  };

  type QueryAllSiteArgs = {
    filter?: Maybe<SiteFilterInput>;
    sort?: Maybe<SiteSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QuerySitePluginArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  };

  type QueryAllSitePluginArgs = {
    filter?: Maybe<SitePluginFilterInput>;
    sort?: Maybe<SitePluginSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
  };

  type QueryGrvscHighlightArgs = {
    source: Scalars['String'];
    language?: Maybe<Scalars['String']>;
    meta?: Maybe<Scalars['String']>;
    defaultTheme?: Maybe<Scalars['String']>;
    additionalThemes?: Maybe<Array<GrvscThemeArgument>>;
  };

  type Site = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    siteMetadata?: Maybe<SiteSiteMetadata>;
    port?: Maybe<Scalars['Int']>;
    host?: Maybe<Scalars['String']>;
    polyfill?: Maybe<Scalars['Boolean']>;
    pathPrefix?: Maybe<Scalars['String']>;
    buildTime?: Maybe<Scalars['Date']>;
  };

  type SiteBuildTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
  };

  type SiteConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SiteGroupConnection>;
  };

  type SiteConnectionDistinctArgs = {
    field: SiteFieldsEnum;
  };

  type SiteConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SiteFieldsEnum;
  };

  type SiteEdge = {
    next?: Maybe<Site>;
    node: Site;
    previous?: Maybe<Site>;
  };

  enum SiteFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    SiteMetadataAppName = 'siteMetadata___appName',
    SiteMetadataAuthor = 'siteMetadata___author',
    SiteMetadataDescription = 'siteMetadata___description',
    SiteMetadataLicense = 'siteMetadata___license',
    SiteMetadataRepositoryType = 'siteMetadata___repository___type',
    SiteMetadataRepositoryUrl = 'siteMetadata___repository___url',
    SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
    SiteMetadataTitle = 'siteMetadata___title',
    SiteMetadataTwitterUsername = 'siteMetadata___twitterUsername',
    SiteMetadataVersion = 'siteMetadata___version',
    Port = 'port',
    Host = 'host',
    Polyfill = 'polyfill',
    PathPrefix = 'pathPrefix',
    BuildTime = 'buildTime',
  }

  type SiteFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
  };

  type SiteGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type SitePage = Node & {
    path: Scalars['String'];
    component: Scalars['String'];
    internalComponentName: Scalars['String'];
    componentChunkName: Scalars['String'];
    matchPath?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
    context?: Maybe<SitePageContext>;
    pluginCreator?: Maybe<SitePlugin>;
    pluginCreatorId?: Maybe<Scalars['String']>;
    componentPath?: Maybe<Scalars['String']>;
  };

  type SitePageConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SitePageGroupConnection>;
  };

  type SitePageConnectionDistinctArgs = {
    field: SitePageFieldsEnum;
  };

  type SitePageConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePageFieldsEnum;
  };

  type SitePageContext = {
    frontmatter?: Maybe<SitePageContextFrontmatter>;
    htmlAst?: Maybe<SitePageContextHtmlAst>;
    previous?: Maybe<Scalars['String']>;
    next?: Maybe<Scalars['String']>;
    timeToRead?: Maybe<Scalars['Int']>;
  };

  type SitePageContextFilterInput = {
    frontmatter?: Maybe<SitePageContextFrontmatterFilterInput>;
    htmlAst?: Maybe<SitePageContextHtmlAstFilterInput>;
    previous?: Maybe<StringQueryOperatorInput>;
    next?: Maybe<StringQueryOperatorInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
  };

  type SitePageContextFrontmatter = {
    date?: Maybe<Scalars['Date']>;
    keywords?: Maybe<Scalars['String']>;
    slug?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
  };

  type SitePageContextFrontmatterFilterInput = {
    date?: Maybe<DateQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    slug?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextHtmlAst = {
    type?: Maybe<Scalars['String']>;
    children?: Maybe<Array<Maybe<SitePageContextHtmlAstChildren>>>;
    data?: Maybe<SitePageContextHtmlAstData>;
  };

  type SitePageContextHtmlAstChildren = {
    type?: Maybe<Scalars['String']>;
    tagName?: Maybe<Scalars['String']>;
    properties?: Maybe<SitePageContextHtmlAstChildrenProperties>;
    children?: Maybe<Array<Maybe<SitePageContextHtmlAstChildrenChildren>>>;
    value?: Maybe<Scalars['String']>;
  };

  type SitePageContextHtmlAstChildrenChildren = {
    type?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    tagName?: Maybe<Scalars['String']>;
    properties?: Maybe<SitePageContextHtmlAstChildrenChildrenProperties>;
    children?: Maybe<Array<Maybe<SitePageContextHtmlAstChildrenChildrenChildren>>>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildren = {
    type?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    tagName?: Maybe<Scalars['String']>;
    properties?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenProperties>;
    children?: Maybe<Array<Maybe<SitePageContextHtmlAstChildrenChildrenChildrenChildren>>>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenChildren = {
    type?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    tagName?: Maybe<Scalars['String']>;
    properties?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenChildrenProperties>;
    children?: Maybe<Array<Maybe<SitePageContextHtmlAstChildrenChildrenChildrenChildrenChildren>>>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenChildrenChildren = {
    type?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    tagName?: Maybe<Scalars['String']>;
    properties?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenChildrenChildrenProperties>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenChildrenChildrenFilterInput = {
    type?: Maybe<StringQueryOperatorInput>;
    value?: Maybe<StringQueryOperatorInput>;
    tagName?: Maybe<StringQueryOperatorInput>;
    properties?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesFilterInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenChildrenChildrenFilterListInput = {
    elemMatch?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenChildrenChildrenFilterInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenChildrenChildrenProperties = {
    srcSet?: Maybe<Array<Maybe<Scalars['String']>>>;
    sizes?: Maybe<Array<Maybe<Scalars['String']>>>;
    type?: Maybe<Scalars['String']>;
    className?: Maybe<Array<Maybe<Scalars['String']>>>;
    src?: Maybe<Scalars['String']>;
    alt?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    loading?: Maybe<Scalars['String']>;
    style?: Maybe<Scalars['String']>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenChildrenChildrenPropertiesFilterInput = {
    srcSet?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    className?: Maybe<StringQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    alt?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    loading?: Maybe<StringQueryOperatorInput>;
    style?: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenChildrenFilterInput = {
    type?: Maybe<StringQueryOperatorInput>;
    value?: Maybe<StringQueryOperatorInput>;
    tagName?: Maybe<StringQueryOperatorInput>;
    properties?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenChildrenPropertiesFilterInput>;
    children?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenChildrenChildrenFilterListInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenChildrenFilterListInput = {
    elemMatch?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenChildrenFilterInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenChildrenProperties = {
    className?: Maybe<Array<Maybe<Scalars['String']>>>;
    style?: Maybe<Scalars['String']>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenChildrenPropertiesFilterInput = {
    className?: Maybe<StringQueryOperatorInput>;
    style?: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenFilterInput = {
    type?: Maybe<StringQueryOperatorInput>;
    value?: Maybe<StringQueryOperatorInput>;
    tagName?: Maybe<StringQueryOperatorInput>;
    properties?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenPropertiesFilterInput>;
    children?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenChildrenFilterListInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenFilterListInput = {
    elemMatch?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenFilterInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenProperties = {
    className?: Maybe<Array<Maybe<Scalars['String']>>>;
    href?: Maybe<Scalars['String']>;
    style?: Maybe<Scalars['String']>;
    target?: Maybe<Scalars['String']>;
    rel?: Maybe<Array<Maybe<Scalars['String']>>>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenPropertiesFilterInput = {
    className?: Maybe<StringQueryOperatorInput>;
    href?: Maybe<StringQueryOperatorInput>;
    style?: Maybe<StringQueryOperatorInput>;
    target?: Maybe<StringQueryOperatorInput>;
    rel?: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenFilterInput = {
    type?: Maybe<StringQueryOperatorInput>;
    value?: Maybe<StringQueryOperatorInput>;
    tagName?: Maybe<StringQueryOperatorInput>;
    properties?: Maybe<SitePageContextHtmlAstChildrenChildrenPropertiesFilterInput>;
    children?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenFilterListInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenFilterListInput = {
    elemMatch?: Maybe<SitePageContextHtmlAstChildrenChildrenFilterInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenProperties = {
    className?: Maybe<Array<Maybe<Scalars['String']>>>;
    style?: Maybe<Scalars['String']>;
  };

  type SitePageContextHtmlAstChildrenChildrenPropertiesFilterInput = {
    className?: Maybe<StringQueryOperatorInput>;
    style?: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextHtmlAstChildrenFilterInput = {
    type?: Maybe<StringQueryOperatorInput>;
    tagName?: Maybe<StringQueryOperatorInput>;
    properties?: Maybe<SitePageContextHtmlAstChildrenPropertiesFilterInput>;
    children?: Maybe<SitePageContextHtmlAstChildrenChildrenFilterListInput>;
    value?: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextHtmlAstChildrenFilterListInput = {
    elemMatch?: Maybe<SitePageContextHtmlAstChildrenFilterInput>;
  };

  type SitePageContextHtmlAstChildrenProperties = {
    className?: Maybe<Array<Maybe<Scalars['String']>>>;
    dataLanguage?: Maybe<Scalars['String']>;
    dataIndex?: Maybe<Scalars['String']>;
  };

  type SitePageContextHtmlAstChildrenPropertiesFilterInput = {
    className?: Maybe<StringQueryOperatorInput>;
    dataLanguage?: Maybe<StringQueryOperatorInput>;
    dataIndex?: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextHtmlAstData = {
    quirksMode?: Maybe<Scalars['Boolean']>;
  };

  type SitePageContextHtmlAstDataFilterInput = {
    quirksMode?: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePageContextHtmlAstFilterInput = {
    type?: Maybe<StringQueryOperatorInput>;
    children?: Maybe<SitePageContextHtmlAstChildrenFilterListInput>;
    data?: Maybe<SitePageContextHtmlAstDataFilterInput>;
  };

  type SitePageEdge = {
    next?: Maybe<SitePage>;
    node: SitePage;
    previous?: Maybe<SitePage>;
  };

  enum SitePageFieldsEnum {
    Path = 'path',
    Component = 'component',
    InternalComponentName = 'internalComponentName',
    ComponentChunkName = 'componentChunkName',
    MatchPath = 'matchPath',
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
    ContextFrontmatterDate = 'context___frontmatter___date',
    ContextFrontmatterKeywords = 'context___frontmatter___keywords',
    ContextFrontmatterSlug = 'context___frontmatter___slug',
    ContextFrontmatterTitle = 'context___frontmatter___title',
    ContextHtmlAstType = 'context___htmlAst___type',
    ContextHtmlAstChildren = 'context___htmlAst___children',
    ContextHtmlAstChildrenType = 'context___htmlAst___children___type',
    ContextHtmlAstChildrenTagName = 'context___htmlAst___children___tagName',
    ContextHtmlAstChildrenChildren = 'context___htmlAst___children___children',
    ContextHtmlAstChildrenValue = 'context___htmlAst___children___value',
    ContextHtmlAstDataQuirksMode = 'context___htmlAst___data___quirksMode',
    ContextPrevious = 'context___previous',
    ContextNext = 'context___next',
    ContextTimeToRead = 'context___timeToRead',
    PluginCreatorId = 'pluginCreator___id',
    PluginCreatorParentId = 'pluginCreator___parent___id',
    PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
    PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
    PluginCreatorParentChildren = 'pluginCreator___parent___children',
    PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
    PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
    PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
    PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
    PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
    PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
    PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
    PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
    PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
    PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
    PluginCreatorChildren = 'pluginCreator___children',
    PluginCreatorChildrenId = 'pluginCreator___children___id',
    PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
    PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
    PluginCreatorChildrenChildren = 'pluginCreator___children___children',
    PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
    PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
    PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
    PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
    PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
    PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
    PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
    PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
    PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
    PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
    PluginCreatorInternalContent = 'pluginCreator___internal___content',
    PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
    PluginCreatorInternalDescription = 'pluginCreator___internal___description',
    PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
    PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
    PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
    PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
    PluginCreatorInternalType = 'pluginCreator___internal___type',
    PluginCreatorResolve = 'pluginCreator___resolve',
    PluginCreatorName = 'pluginCreator___name',
    PluginCreatorVersion = 'pluginCreator___version',
    PluginCreatorPluginOptionsPlugins = 'pluginCreator___pluginOptions___plugins',
    PluginCreatorPluginOptionsPluginsResolve = 'pluginCreator___pluginOptions___plugins___resolve',
    PluginCreatorPluginOptionsPluginsId = 'pluginCreator___pluginOptions___plugins___id',
    PluginCreatorPluginOptionsPluginsName = 'pluginCreator___pluginOptions___plugins___name',
    PluginCreatorPluginOptionsPluginsVersion = 'pluginCreator___pluginOptions___plugins___version',
    PluginCreatorPluginOptionsPluginsNodeApIs = 'pluginCreator___pluginOptions___plugins___nodeAPIs',
    PluginCreatorPluginOptionsPluginsBrowserApIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
    PluginCreatorPluginOptionsPluginsPluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
    PluginCreatorPluginOptionsCookieDomain = 'pluginCreator___pluginOptions___cookieDomain',
    PluginCreatorPluginOptionsTrackingId = 'pluginCreator___pluginOptions___trackingId',
    PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
    PluginCreatorPluginOptionsFonts = 'pluginCreator___pluginOptions___fonts',
    PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
    PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
    PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
    PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
    PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
    PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
    PluginCreatorPluginOptionsDebug = 'pluginCreator___pluginOptions___debug',
    PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
    PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
    PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
    PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
    PluginCreatorPluginOptionsQuality = 'pluginCreator___pluginOptions___quality',
    PluginCreatorPluginOptionsWithWebp = 'pluginCreator___pluginOptions___withWebp',
    PluginCreatorPluginOptionsPathPrefix = 'pluginCreator___pluginOptions___pathPrefix',
    PluginCreatorPluginOptionsWrapperStyle = 'pluginCreator___pluginOptions___wrapperStyle',
    PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
    PluginCreatorPluginOptionsLinkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
    PluginCreatorPluginOptionsShowCaptions = 'pluginCreator___pluginOptions___showCaptions',
    PluginCreatorPluginOptionsMarkdownCaptions = 'pluginCreator___pluginOptions___markdownCaptions',
    PluginCreatorPluginOptionsTracedSvg = 'pluginCreator___pluginOptions___tracedSVG',
    PluginCreatorPluginOptionsLoading = 'pluginCreator___pluginOptions___loading',
    PluginCreatorPluginOptionsDisableBgImageOnAlpha = 'pluginCreator___pluginOptions___disableBgImageOnAlpha',
    PluginCreatorPluginOptionsDisableBgImage = 'pluginCreator___pluginOptions___disableBgImage',
    PluginCreatorPluginOptionsTheme = 'pluginCreator___pluginOptions___theme',
    PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
    PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
    PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
    PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
    PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
    PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
    PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
    PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
    PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
    PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
    PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
    PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
    PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
    PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
    PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
    PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
    PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
    PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
    PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
    PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
    PluginCreatorId = 'pluginCreatorId',
    ComponentPath = 'componentPath',
  }

  type SitePageFilterInput = {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
  };

  type SitePageGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type SitePageSortInput = {
    fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type SitePlugin = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    resolve?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    pluginOptions?: Maybe<SitePluginPluginOptions>;
    nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    pluginFilepath?: Maybe<Scalars['String']>;
    packageJson?: Maybe<SitePluginPackageJson>;
  };

  type SitePluginConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SitePluginGroupConnection>;
  };

  type SitePluginConnectionDistinctArgs = {
    field: SitePluginFieldsEnum;
  };

  type SitePluginConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePluginFieldsEnum;
  };

  type SitePluginEdge = {
    next?: Maybe<SitePlugin>;
    node: SitePlugin;
    previous?: Maybe<SitePlugin>;
  };

  enum SitePluginFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Resolve = 'resolve',
    Name = 'name',
    Version = 'version',
    PluginOptionsPlugins = 'pluginOptions___plugins',
    PluginOptionsPluginsResolve = 'pluginOptions___plugins___resolve',
    PluginOptionsPluginsId = 'pluginOptions___plugins___id',
    PluginOptionsPluginsName = 'pluginOptions___plugins___name',
    PluginOptionsPluginsVersion = 'pluginOptions___plugins___version',
    PluginOptionsPluginsPluginOptionsMaxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
    PluginOptionsPluginsPluginOptionsQuality = 'pluginOptions___plugins___pluginOptions___quality',
    PluginOptionsPluginsPluginOptionsWithWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
    PluginOptionsPluginsPluginOptionsPathPrefix = 'pluginOptions___plugins___pluginOptions___pathPrefix',
    PluginOptionsPluginsPluginOptionsWrapperStyle = 'pluginOptions___plugins___pluginOptions___wrapperStyle',
    PluginOptionsPluginsPluginOptionsBackgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
    PluginOptionsPluginsPluginOptionsLinkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
    PluginOptionsPluginsPluginOptionsShowCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
    PluginOptionsPluginsPluginOptionsMarkdownCaptions = 'pluginOptions___plugins___pluginOptions___markdownCaptions',
    PluginOptionsPluginsPluginOptionsTracedSvg = 'pluginOptions___plugins___pluginOptions___tracedSVG',
    PluginOptionsPluginsPluginOptionsLoading = 'pluginOptions___plugins___pluginOptions___loading',
    PluginOptionsPluginsPluginOptionsDisableBgImageOnAlpha = 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha',
    PluginOptionsPluginsPluginOptionsDisableBgImage = 'pluginOptions___plugins___pluginOptions___disableBgImage',
    PluginOptionsPluginsPluginOptionsTheme = 'pluginOptions___plugins___pluginOptions___theme',
    PluginOptionsPluginsNodeApIs = 'pluginOptions___plugins___nodeAPIs',
    PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
    PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
    PluginOptionsCookieDomain = 'pluginOptions___cookieDomain',
    PluginOptionsTrackingId = 'pluginOptions___trackingId',
    PluginOptionsDisplay = 'pluginOptions___display',
    PluginOptionsFonts = 'pluginOptions___fonts',
    PluginOptionsBackgroundColor = 'pluginOptions___background_color',
    PluginOptionsIcon = 'pluginOptions___icon',
    PluginOptionsName = 'pluginOptions___name',
    PluginOptionsShortName = 'pluginOptions___short_name',
    PluginOptionsStartUrl = 'pluginOptions___start_url',
    PluginOptionsThemeColor = 'pluginOptions___theme_color',
    PluginOptionsDebug = 'pluginOptions___debug',
    PluginOptionsIsTsx = 'pluginOptions___isTSX',
    PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
    PluginOptionsPath = 'pluginOptions___path',
    PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
    PluginOptionsQuality = 'pluginOptions___quality',
    PluginOptionsWithWebp = 'pluginOptions___withWebp',
    PluginOptionsPathPrefix = 'pluginOptions___pathPrefix',
    PluginOptionsWrapperStyle = 'pluginOptions___wrapperStyle',
    PluginOptionsBackgroundColor = 'pluginOptions___backgroundColor',
    PluginOptionsLinkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
    PluginOptionsShowCaptions = 'pluginOptions___showCaptions',
    PluginOptionsMarkdownCaptions = 'pluginOptions___markdownCaptions',
    PluginOptionsTracedSvg = 'pluginOptions___tracedSVG',
    PluginOptionsLoading = 'pluginOptions___loading',
    PluginOptionsDisableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
    PluginOptionsDisableBgImage = 'pluginOptions___disableBgImage',
    PluginOptionsTheme = 'pluginOptions___theme',
    PluginOptionsPathCheck = 'pluginOptions___pathCheck',
    NodeApIs = 'nodeAPIs',
    BrowserApIs = 'browserAPIs',
    SsrApIs = 'ssrAPIs',
    PluginFilepath = 'pluginFilepath',
    PackageJsonName = 'packageJson___name',
    PackageJsonDescription = 'packageJson___description',
    PackageJsonVersion = 'packageJson___version',
    PackageJsonMain = 'packageJson___main',
    PackageJsonLicense = 'packageJson___license',
    PackageJsonDependencies = 'packageJson___dependencies',
    PackageJsonDependenciesName = 'packageJson___dependencies___name',
    PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
    PackageJsonDevDependencies = 'packageJson___devDependencies',
    PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
    PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
    PackageJsonPeerDependencies = 'packageJson___peerDependencies',
    PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
    PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
    PackageJsonKeywords = 'packageJson___keywords',
  }

  type SitePluginFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
  };

  type SitePluginGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJson = {
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    main?: Maybe<Scalars['String']>;
    license?: Maybe<Scalars['String']>;
    dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
    devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
    peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
    keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  };

  type SitePluginPackageJsonDependencies = {
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
  };

  type SitePluginPackageJsonDevDependencies = {
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonDevDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDevDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
  };

  type SitePluginPackageJsonFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    main?: Maybe<StringQueryOperatorInput>;
    license?: Maybe<StringQueryOperatorInput>;
    dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
    devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
    peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependencies = {
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
  };

  type SitePluginPluginOptions = {
    plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
    cookieDomain?: Maybe<Scalars['String']>;
    trackingId?: Maybe<Scalars['String']>;
    display?: Maybe<Scalars['String']>;
    fonts?: Maybe<Array<Maybe<Scalars['String']>>>;
    background_color?: Maybe<Scalars['String']>;
    icon?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    short_name?: Maybe<Scalars['String']>;
    start_url?: Maybe<Scalars['String']>;
    theme_color?: Maybe<Scalars['String']>;
    debug?: Maybe<Scalars['Boolean']>;
    isTSX?: Maybe<Scalars['Boolean']>;
    allExtensions?: Maybe<Scalars['Boolean']>;
    path?: Maybe<Scalars['String']>;
    maxWidth?: Maybe<Scalars['Int']>;
    quality?: Maybe<Scalars['Int']>;
    withWebp?: Maybe<Scalars['Boolean']>;
    pathPrefix?: Maybe<Scalars['String']>;
    wrapperStyle?: Maybe<Scalars['String']>;
    backgroundColor?: Maybe<Scalars['String']>;
    linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
    showCaptions?: Maybe<Scalars['Boolean']>;
    markdownCaptions?: Maybe<Scalars['Boolean']>;
    tracedSVG?: Maybe<Scalars['Boolean']>;
    loading?: Maybe<Scalars['String']>;
    disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
    disableBgImage?: Maybe<Scalars['Boolean']>;
    theme?: Maybe<Scalars['String']>;
    pathCheck?: Maybe<Scalars['Boolean']>;
  };

  type SitePluginPluginOptionsFilterInput = {
    plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
    cookieDomain?: Maybe<StringQueryOperatorInput>;
    trackingId?: Maybe<StringQueryOperatorInput>;
    display?: Maybe<StringQueryOperatorInput>;
    fonts?: Maybe<StringQueryOperatorInput>;
    background_color?: Maybe<StringQueryOperatorInput>;
    icon?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    short_name?: Maybe<StringQueryOperatorInput>;
    start_url?: Maybe<StringQueryOperatorInput>;
    theme_color?: Maybe<StringQueryOperatorInput>;
    debug?: Maybe<BooleanQueryOperatorInput>;
    isTSX?: Maybe<BooleanQueryOperatorInput>;
    allExtensions?: Maybe<BooleanQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    maxWidth?: Maybe<IntQueryOperatorInput>;
    quality?: Maybe<IntQueryOperatorInput>;
    withWebp?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    wrapperStyle?: Maybe<StringQueryOperatorInput>;
    backgroundColor?: Maybe<StringQueryOperatorInput>;
    linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
    showCaptions?: Maybe<BooleanQueryOperatorInput>;
    markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
    tracedSVG?: Maybe<BooleanQueryOperatorInput>;
    loading?: Maybe<StringQueryOperatorInput>;
    disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
    disableBgImage?: Maybe<BooleanQueryOperatorInput>;
    theme?: Maybe<StringQueryOperatorInput>;
    pathCheck?: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePluginPluginOptionsPlugins = {
    resolve?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
    nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    pluginFilepath?: Maybe<Scalars['String']>;
  };

  type SitePluginPluginOptionsPluginsFilterInput = {
    resolve?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsPluginsFilterListInput = {
    elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
  };

  type SitePluginPluginOptionsPluginsPluginOptions = {
    maxWidth?: Maybe<Scalars['Int']>;
    quality?: Maybe<Scalars['Int']>;
    withWebp?: Maybe<Scalars['Boolean']>;
    pathPrefix?: Maybe<Scalars['String']>;
    wrapperStyle?: Maybe<Scalars['String']>;
    backgroundColor?: Maybe<Scalars['String']>;
    linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
    showCaptions?: Maybe<Scalars['Boolean']>;
    markdownCaptions?: Maybe<Scalars['Boolean']>;
    tracedSVG?: Maybe<Scalars['Boolean']>;
    loading?: Maybe<Scalars['String']>;
    disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
    disableBgImage?: Maybe<Scalars['Boolean']>;
    theme?: Maybe<Scalars['String']>;
  };

  type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
    maxWidth?: Maybe<IntQueryOperatorInput>;
    quality?: Maybe<IntQueryOperatorInput>;
    withWebp?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    wrapperStyle?: Maybe<StringQueryOperatorInput>;
    backgroundColor?: Maybe<StringQueryOperatorInput>;
    linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
    showCaptions?: Maybe<BooleanQueryOperatorInput>;
    markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
    tracedSVG?: Maybe<BooleanQueryOperatorInput>;
    loading?: Maybe<StringQueryOperatorInput>;
    disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
    disableBgImage?: Maybe<BooleanQueryOperatorInput>;
    theme?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginSortInput = {
    fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type SiteSiteMetadata = {
    appName?: Maybe<Scalars['String']>;
    author?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    license?: Maybe<Scalars['String']>;
    repository?: Maybe<SiteSiteMetadataRepository>;
    siteUrl?: Maybe<Scalars['String']>;
    title?: Maybe<Scalars['String']>;
    twitterUsername?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
  };

  type SiteSiteMetadataFilterInput = {
    appName?: Maybe<StringQueryOperatorInput>;
    author?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    license?: Maybe<StringQueryOperatorInput>;
    repository?: Maybe<SiteSiteMetadataRepositoryFilterInput>;
    siteUrl?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
    twitterUsername?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
  };

  type SiteSiteMetadataRepository = {
    type?: Maybe<Scalars['String']>;
    url?: Maybe<Scalars['String']>;
  };

  type SiteSiteMetadataRepositoryFilterInput = {
    type?: Maybe<StringQueryOperatorInput>;
    url?: Maybe<StringQueryOperatorInput>;
  };

  type SiteSortInput = {
    fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type SkillsJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    name?: Maybe<Scalars['String']>;
    sortOrder?: Maybe<Scalars['Int']>;
    items?: Maybe<Array<Maybe<SkillsJsonItems>>>;
  };

  type SkillsJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SkillsJsonEdge>;
    nodes: Array<SkillsJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SkillsJsonGroupConnection>;
  };

  type SkillsJsonConnectionDistinctArgs = {
    field: SkillsJsonFieldsEnum;
  };

  type SkillsJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SkillsJsonFieldsEnum;
  };

  type SkillsJsonEdge = {
    next?: Maybe<SkillsJson>;
    node: SkillsJson;
    previous?: Maybe<SkillsJson>;
  };

  enum SkillsJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Name = 'name',
    SortOrder = 'sortOrder',
    Items = 'items',
    ItemsName = 'items___name',
    ItemsProficiencyLevel = 'items___proficiencyLevel',
    ItemsSortOrder = 'items___sortOrder',
  }

  type SkillsJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    name?: Maybe<StringQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
    items?: Maybe<SkillsJsonItemsFilterListInput>;
  };

  type SkillsJsonFilterListInput = {
    elemMatch?: Maybe<SkillsJsonFilterInput>;
  };

  type SkillsJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SkillsJsonEdge>;
    nodes: Array<SkillsJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type SkillsJsonItems = {
    name?: Maybe<Scalars['String']>;
    proficiencyLevel?: Maybe<Scalars['Int']>;
    sortOrder?: Maybe<Scalars['Int']>;
  };

  type SkillsJsonItemsFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    proficiencyLevel?: Maybe<IntQueryOperatorInput>;
    sortOrder?: Maybe<IntQueryOperatorInput>;
  };

  type SkillsJsonItemsFilterListInput = {
    elemMatch?: Maybe<SkillsJsonItemsFilterInput>;
  };

  type SkillsJsonSortInput = {
    fields?: Maybe<Array<Maybe<SkillsJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  enum SortOrderEnum {
    Asc = 'ASC',
    Desc = 'DESC',
  }

  type StringQueryOperatorInput = {
    eq?: Maybe<Scalars['String']>;
    ne?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Maybe<Scalars['String']>>>;
    nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    regex?: Maybe<Scalars['String']>;
    glob?: Maybe<Scalars['String']>;
  };

  type TechnologiesJson = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    img?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    website?: Maybe<Scalars['String']>;
  };

  type TechnologiesJsonConnection = {
    totalCount: Scalars['Int'];
    edges: Array<TechnologiesJsonEdge>;
    nodes: Array<TechnologiesJson>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<TechnologiesJsonGroupConnection>;
  };

  type TechnologiesJsonConnectionDistinctArgs = {
    field: TechnologiesJsonFieldsEnum;
  };

  type TechnologiesJsonConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: TechnologiesJsonFieldsEnum;
  };

  type TechnologiesJsonEdge = {
    next?: Maybe<TechnologiesJson>;
    node: TechnologiesJson;
    previous?: Maybe<TechnologiesJson>;
  };

  enum TechnologiesJsonFieldsEnum {
    Id = 'id',
    ParentId = 'parent___id',
    ParentParentId = 'parent___parent___id',
    ParentParentParentId = 'parent___parent___parent___id',
    ParentParentParentChildren = 'parent___parent___parent___children',
    ParentParentChildren = 'parent___parent___children',
    ParentParentChildrenId = 'parent___parent___children___id',
    ParentParentChildrenChildren = 'parent___parent___children___children',
    ParentParentInternalContent = 'parent___parent___internal___content',
    ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
    ParentParentInternalDescription = 'parent___parent___internal___description',
    ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
    ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
    ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
    ParentParentInternalOwner = 'parent___parent___internal___owner',
    ParentParentInternalType = 'parent___parent___internal___type',
    ParentChildren = 'parent___children',
    ParentChildrenId = 'parent___children___id',
    ParentChildrenParentId = 'parent___children___parent___id',
    ParentChildrenParentChildren = 'parent___children___parent___children',
    ParentChildrenChildren = 'parent___children___children',
    ParentChildrenChildrenId = 'parent___children___children___id',
    ParentChildrenChildrenChildren = 'parent___children___children___children',
    ParentChildrenInternalContent = 'parent___children___internal___content',
    ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
    ParentChildrenInternalDescription = 'parent___children___internal___description',
    ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
    ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
    ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
    ParentChildrenInternalOwner = 'parent___children___internal___owner',
    ParentChildrenInternalType = 'parent___children___internal___type',
    ParentInternalContent = 'parent___internal___content',
    ParentInternalContentDigest = 'parent___internal___contentDigest',
    ParentInternalDescription = 'parent___internal___description',
    ParentInternalFieldOwners = 'parent___internal___fieldOwners',
    ParentInternalIgnoreType = 'parent___internal___ignoreType',
    ParentInternalMediaType = 'parent___internal___mediaType',
    ParentInternalOwner = 'parent___internal___owner',
    ParentInternalType = 'parent___internal___type',
    Children = 'children',
    ChildrenId = 'children___id',
    ChildrenParentId = 'children___parent___id',
    ChildrenParentParentId = 'children___parent___parent___id',
    ChildrenParentParentChildren = 'children___parent___parent___children',
    ChildrenParentChildren = 'children___parent___children',
    ChildrenParentChildrenId = 'children___parent___children___id',
    ChildrenParentChildrenChildren = 'children___parent___children___children',
    ChildrenParentInternalContent = 'children___parent___internal___content',
    ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
    ChildrenParentInternalDescription = 'children___parent___internal___description',
    ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
    ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
    ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
    ChildrenParentInternalOwner = 'children___parent___internal___owner',
    ChildrenParentInternalType = 'children___parent___internal___type',
    ChildrenChildren = 'children___children',
    ChildrenChildrenId = 'children___children___id',
    ChildrenChildrenParentId = 'children___children___parent___id',
    ChildrenChildrenParentChildren = 'children___children___parent___children',
    ChildrenChildrenChildren = 'children___children___children',
    ChildrenChildrenChildrenId = 'children___children___children___id',
    ChildrenChildrenChildrenChildren = 'children___children___children___children',
    ChildrenChildrenInternalContent = 'children___children___internal___content',
    ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
    ChildrenChildrenInternalDescription = 'children___children___internal___description',
    ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
    ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
    ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
    ChildrenChildrenInternalOwner = 'children___children___internal___owner',
    ChildrenChildrenInternalType = 'children___children___internal___type',
    ChildrenInternalContent = 'children___internal___content',
    ChildrenInternalContentDigest = 'children___internal___contentDigest',
    ChildrenInternalDescription = 'children___internal___description',
    ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
    ChildrenInternalIgnoreType = 'children___internal___ignoreType',
    ChildrenInternalMediaType = 'children___internal___mediaType',
    ChildrenInternalOwner = 'children___internal___owner',
    ChildrenInternalType = 'children___internal___type',
    InternalContent = 'internal___content',
    InternalContentDigest = 'internal___contentDigest',
    InternalDescription = 'internal___description',
    InternalFieldOwners = 'internal___fieldOwners',
    InternalIgnoreType = 'internal___ignoreType',
    InternalMediaType = 'internal___mediaType',
    InternalOwner = 'internal___owner',
    InternalType = 'internal___type',
    Img = 'img',
    Name = 'name',
    Website = 'website',
  }

  type TechnologiesJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    img?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    website?: Maybe<StringQueryOperatorInput>;
  };

  type TechnologiesJsonFilterListInput = {
    elemMatch?: Maybe<TechnologiesJsonFilterInput>;
  };

  type TechnologiesJsonGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<TechnologiesJsonEdge>;
    nodes: Array<TechnologiesJson>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
  };

  type TechnologiesJsonSortInput = {
    fields?: Maybe<Array<Maybe<TechnologiesJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type GatsbyImageSharpFixedFragment = {
    base64: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
  };

  type GatsbyImageSharpFixed_TracedSvgFragment = {
    tracedSVG: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
  };

  type GatsbyImageSharpFixed_WithWebpFragment = {
    base64: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp: Maybe<string>;
    srcSetWebp: Maybe<string>;
  };

  type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
    tracedSVG: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp: Maybe<string>;
    srcSetWebp: Maybe<string>;
  };

  type GatsbyImageSharpFixed_NoBase64Fragment = { width: number; height: number; src: string; srcSet: string };

  type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp: Maybe<string>;
    srcSetWebp: Maybe<string>;
  };

  type GatsbyImageSharpFluidFragment = {
    base64: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
  };

  type GatsbyImageSharpFluid_TracedSvgFragment = {
    tracedSVG: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
  };

  type GatsbyImageSharpFluid_WithWebpFragment = {
    base64: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp: Maybe<string>;
    srcSetWebp: Maybe<string>;
    sizes: string;
  };

  type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
    tracedSVG: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp: Maybe<string>;
    srcSetWebp: Maybe<string>;
    sizes: string;
  };

  type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number; src: string; srcSet: string; sizes: string };

  type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp: Maybe<string>;
    srcSetWebp: Maybe<string>;
    sizes: string;
  };

  type GatsbyImageSharpResolutionsFragment = {
    base64: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
  };

  type GatsbyImageSharpResolutions_TracedSvgFragment = {
    tracedSVG: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
  };

  type GatsbyImageSharpResolutions_WithWebpFragment = {
    base64: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp: Maybe<string>;
    srcSetWebp: Maybe<string>;
  };

  type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
    tracedSVG: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp: Maybe<string>;
    srcSetWebp: Maybe<string>;
  };

  type GatsbyImageSharpResolutions_NoBase64Fragment = { width: number; height: number; src: string; srcSet: string };

  type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp: Maybe<string>;
    srcSetWebp: Maybe<string>;
  };

  type GatsbyImageSharpSizesFragment = {
    base64: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
  };

  type GatsbyImageSharpSizes_TracedSvgFragment = {
    tracedSVG: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
  };

  type GatsbyImageSharpSizes_WithWebpFragment = {
    base64: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp: Maybe<string>;
    srcSetWebp: Maybe<string>;
    sizes: string;
  };

  type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
    tracedSVG: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp: Maybe<string>;
    srcSetWebp: Maybe<string>;
    sizes: string;
  };

  type GatsbyImageSharpSizes_NoBase64Fragment = { aspectRatio: number; src: string; srcSet: string; sizes: string };

  type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp: Maybe<string>;
    srcSetWebp: Maybe<string>;
    sizes: string;
  };

  type InstallPwaDataQueryVariables = {};

  type InstallPwaDataQuery = {
    appIcon: Maybe<{ childImageSharp: Maybe<{ fixed: Maybe<GatsbyImageSharpFixed_WithWebpFragment> }> }>;
  };

  type LocationMapDataQueryVariables = {};

  type LocationMapDataQuery = {
    dataJson: Maybe<{ location: Maybe<{ lat: Maybe<number>; lng: Maybe<number> }> }>;
    gmapsJson: Maybe<{
      styles: Maybe<{
        dark: Maybe<
          Array<
            Maybe<{
              elementType: Maybe<string>;
              featureType: Maybe<string>;
              stylers: Maybe<Array<Maybe<{ color: Maybe<string> }>>>;
            }>
          >
        >;
        light: Maybe<
          Array<
            Maybe<{
              elementType: Maybe<string>;
              featureType: Maybe<string>;
              stylers: Maybe<Array<Maybe<{ color: Maybe<string> }>>>;
            }>
          >
        >;
      }>;
    }>;
  };

  type SeoDataQueryVariables = {};

  type SeoDataQuery = {
    banner: Maybe<{ childImageSharp: Maybe<{ resize: Maybe<{ src: Maybe<string> }> }> }>;
    site: Maybe<{
      siteMetadata: Maybe<{
        description: Maybe<string>;
        siteUrl: Maybe<string>;
        title: Maybe<string>;
        twitterUsername: Maybe<string>;
      }>;
    }>;
  };

  type FooterDataQueryVariables = {};

  type FooterDataQuery = {
    site: Maybe<{
      siteMetadata: Maybe<{
        license: Maybe<string>;
        version: Maybe<string>;
        repository: Maybe<{ url: Maybe<string> }>;
      }>;
    }>;
  };

  type HeaderDataQueryVariables = {};

  type HeaderDataQuery = {
    dataJson: Maybe<{ jobTitle: Maybe<string> }>;
    file: Maybe<{ childImageSharp: Maybe<{ fixed: Maybe<GatsbyImageSharpFixed_WithWebpFragment> }> }>;
  };

  type NavigationDataQueryVariables = {};

  type NavigationDataQuery = {
    allMarkdownRemark: { totalCount: number };
    allNavigationJson: {
      nodes: Array<{
        icon: Maybe<string>;
        ignoreInNavigation: Maybe<boolean>;
        keywords: Maybe<Array<Maybe<string>>>;
        name: Maybe<string>;
        navOrder: Maybe<number>;
        to: Maybe<string>;
      }>;
    };
    dataJson: Maybe<{ resumeLink: Maybe<string> }>;
  };

  type NotFoundPageQueryVariables = {};

  type NotFoundPageQuery = { pageData: Maybe<{ keywords: Maybe<Array<Maybe<string>>>; name: Maybe<string> }> };

  type AboutMePageDataQueryVariables = {};

  type AboutMePageDataQuery = {
    companyImg: Maybe<{ childImageSharp: Maybe<{ fixed: Maybe<GatsbyImageSharpFixed_WithWebpFragment> }> }>;
    contactImgs: {
      nodes: Array<{ base: string; childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }>;
    };
    coverImg: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }>;
    pageData: Maybe<{ keywords: Maybe<Array<Maybe<string>>>; name: Maybe<string> }>;
    personalDetails: Maybe<{
      jobTitle: Maybe<string>;
      openToGigs: Maybe<boolean>;
      company: Maybe<{ name: Maybe<string>; website: Maybe<string> }>;
      contacts: Maybe<Array<Maybe<{ img: Maybe<string>; label: Maybe<string>; url: Maybe<string> }>>>;
      location: Maybe<{ city: Maybe<string>; website: Maybe<string> }>;
    }>;
    techImgs: {
      nodes: Array<{ base: string; childImageSharp: Maybe<{ fixed: Maybe<GatsbyImageSharpFixed_WithWebpFragment> }> }>;
    };
    techs: { nodes: Array<{ img: Maybe<string>; name: Maybe<string>; website: Maybe<string> }> };
  };

  type IndexPageQueryVariables = {};

  type IndexPageQuery = { pageData: Maybe<{ keywords: Maybe<Array<Maybe<string>>>; name: Maybe<string> }> };

  type PostsPageQueryVariables = {};

  type PostsPageQuery = {
    mdData: { nodes: Array<{ frontmatter: { date: string; slug: string; title: string } }> };
    pageData: Maybe<{ keywords: Maybe<Array<Maybe<string>>>; name: Maybe<string> }>;
  };

  type SkillsPageDataQueryVariables = {};

  type SkillsPageDataQuery = {
    allSkillsJson: {
      nodes: Array<{
        name: Maybe<string>;
        sortOrder: Maybe<number>;
        items: Maybe<Array<Maybe<{ name: Maybe<string>; proficiencyLevel: Maybe<number>; sortOrder: Maybe<number> }>>>;
      }>;
    };
    pageData: Maybe<{ keywords: Maybe<Array<Maybe<string>>>; name: Maybe<string> }>;
  };
}
