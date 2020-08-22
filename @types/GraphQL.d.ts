declare module GraphQL {
  type Maybe<T> = T | null;
  type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
  /** All built-in and custom scalars, mapped to their actual values */
  type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    Date: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
  };

  type BooleanQueryOperatorInput = {
    eq?: Maybe<Scalars['Boolean']>;
    ne?: Maybe<Scalars['Boolean']>;
    in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  };

  type DataJsonCompanyFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    website?: Maybe<StringQueryOperatorInput>;
  };

  type DataJsonContactsFilterInput = {
    label?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
    url?: Maybe<StringQueryOperatorInput>;
  };

  type DataJsonContactsFilterListInput = {
    elemMatch?: Maybe<DataJsonContactsFilterInput>;
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
    ContactsLabel = 'contacts___label',
    ContactsType = 'contacts___type',
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

  type DirectorySortInput = {
    fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type DuotoneGradient = {
    highlight: Scalars['String'];
    shadow: Scalars['String'];
    opacity?: Maybe<Scalars['Int']>;
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
    ChildDataJsonContactsLabel = 'childDataJson___contacts___label',
    ChildDataJsonContactsType = 'childDataJson___contacts___type',
    ChildDataJsonContactsUrl = 'childDataJson___contacts___url',
    ChildDataJsonJobTitle = 'childDataJson___jobTitle',
    ChildDataJsonLocationCity = 'childDataJson___location___city',
    ChildDataJsonLocationCountry = 'childDataJson___location___country',
    ChildDataJsonLocationLat = 'childDataJson___location___lat',
    ChildDataJsonLocationLng = 'childDataJson___location___lng',
    ChildDataJsonLocationWebsite = 'childDataJson___location___website',
    ChildDataJsonOpenToGigs = 'childDataJson___openToGigs',
    ChildDataJsonResumeLink = 'childDataJson___resumeLink',
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
    ChildThemeJsonId = 'childThemeJson___id',
    ChildThemeJsonParentId = 'childThemeJson___parent___id',
    ChildThemeJsonParentParentId = 'childThemeJson___parent___parent___id',
    ChildThemeJsonParentParentChildren = 'childThemeJson___parent___parent___children',
    ChildThemeJsonParentChildren = 'childThemeJson___parent___children',
    ChildThemeJsonParentChildrenId = 'childThemeJson___parent___children___id',
    ChildThemeJsonParentChildrenChildren = 'childThemeJson___parent___children___children',
    ChildThemeJsonParentInternalContent = 'childThemeJson___parent___internal___content',
    ChildThemeJsonParentInternalContentDigest = 'childThemeJson___parent___internal___contentDigest',
    ChildThemeJsonParentInternalDescription = 'childThemeJson___parent___internal___description',
    ChildThemeJsonParentInternalFieldOwners = 'childThemeJson___parent___internal___fieldOwners',
    ChildThemeJsonParentInternalIgnoreType = 'childThemeJson___parent___internal___ignoreType',
    ChildThemeJsonParentInternalMediaType = 'childThemeJson___parent___internal___mediaType',
    ChildThemeJsonParentInternalOwner = 'childThemeJson___parent___internal___owner',
    ChildThemeJsonParentInternalType = 'childThemeJson___parent___internal___type',
    ChildThemeJsonChildren = 'childThemeJson___children',
    ChildThemeJsonChildrenId = 'childThemeJson___children___id',
    ChildThemeJsonChildrenParentId = 'childThemeJson___children___parent___id',
    ChildThemeJsonChildrenParentChildren = 'childThemeJson___children___parent___children',
    ChildThemeJsonChildrenChildren = 'childThemeJson___children___children',
    ChildThemeJsonChildrenChildrenId = 'childThemeJson___children___children___id',
    ChildThemeJsonChildrenChildrenChildren = 'childThemeJson___children___children___children',
    ChildThemeJsonChildrenInternalContent = 'childThemeJson___children___internal___content',
    ChildThemeJsonChildrenInternalContentDigest = 'childThemeJson___children___internal___contentDigest',
    ChildThemeJsonChildrenInternalDescription = 'childThemeJson___children___internal___description',
    ChildThemeJsonChildrenInternalFieldOwners = 'childThemeJson___children___internal___fieldOwners',
    ChildThemeJsonChildrenInternalIgnoreType = 'childThemeJson___children___internal___ignoreType',
    ChildThemeJsonChildrenInternalMediaType = 'childThemeJson___children___internal___mediaType',
    ChildThemeJsonChildrenInternalOwner = 'childThemeJson___children___internal___owner',
    ChildThemeJsonChildrenInternalType = 'childThemeJson___children___internal___type',
    ChildThemeJsonInternalContent = 'childThemeJson___internal___content',
    ChildThemeJsonInternalContentDigest = 'childThemeJson___internal___contentDigest',
    ChildThemeJsonInternalDescription = 'childThemeJson___internal___description',
    ChildThemeJsonInternalFieldOwners = 'childThemeJson___internal___fieldOwners',
    ChildThemeJsonInternalIgnoreType = 'childThemeJson___internal___ignoreType',
    ChildThemeJsonInternalMediaType = 'childThemeJson___internal___mediaType',
    ChildThemeJsonInternalOwner = 'childThemeJson___internal___owner',
    ChildThemeJsonInternalType = 'childThemeJson___internal___type',
    ChildThemeJsonColorsBlack = 'childThemeJson___colors___black',
    ChildThemeJsonColorsDark = 'childThemeJson___colors___dark',
    ChildThemeJsonColorsError = 'childThemeJson___colors___error',
    ChildThemeJsonColorsGray = 'childThemeJson___colors___gray',
    ChildThemeJsonColorsInfo = 'childThemeJson___colors___info',
    ChildThemeJsonColorsLightgray = 'childThemeJson___colors___lightgray',
    ChildThemeJsonColorsPrimary = 'childThemeJson___colors___primary',
    ChildThemeJsonColorsSecondary = 'childThemeJson___colors___secondary',
    ChildThemeJsonColorsSuccess = 'childThemeJson___colors___success',
    ChildThemeJsonColorsVsCodeDark = 'childThemeJson___colors___vsCodeDark',
    ChildThemeJsonColorsWhite = 'childThemeJson___colors___white',
    ChildThemeJsonFontsMain = 'childThemeJson___fonts___main',
    ChildThemeJsonFontWeightsBold = 'childThemeJson___fontWeights___bold',
    ChildThemeJsonFontWeightsRegular = 'childThemeJson___fontWeights___regular',
    ChildThemeJsonFontWeightsSemiBold = 'childThemeJson___fontWeights___semiBold',
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
    ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
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
    childrenNavigationJson?: Maybe<NavigationJsonFilterListInput>;
    childrenTechnologiesJson?: Maybe<TechnologiesJsonFilterListInput>;
    childThemeJson?: Maybe<ThemeJsonFilterInput>;
    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
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

  type FrontmatterFilterInput = {
    date?: Maybe<StringQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    slug?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
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
    TokenizedLinesLineNumber = 'tokenizedLines___lineNumber',
    TokenizedLinesDiff = 'tokenizedLines___diff',
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

  type GrvscCodeBlockSortInput = {
    fields?: Maybe<Array<Maybe<GrvscCodeBlockFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  enum GrvscCodeSpanFieldsEnum {
    Index = 'index',
    Html = 'html',
    Text = 'text',
    ClassName = 'className',
    Language = 'language',
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
    Tokens = 'tokens',
    TokensText = 'tokens___text',
    TokensStartIndex = 'tokens___startIndex',
    TokensEndIndex = 'tokens___endIndex',
    TokensScopes = 'tokens___scopes',
    TokensHtml = 'tokens___html',
    TokensClassName = 'tokens___className',
    TokensDefaultThemeTokenDataThemeIdentifier = 'tokens___defaultThemeTokenData___themeIdentifier',
    TokensDefaultThemeTokenDataClassName = 'tokens___defaultThemeTokenData___className',
    TokensDefaultThemeTokenDataMeta = 'tokens___defaultThemeTokenData___meta',
    TokensDefaultThemeTokenDataColor = 'tokens___defaultThemeTokenData___color',
    TokensDefaultThemeTokenDataBold = 'tokens___defaultThemeTokenData___bold',
    TokensDefaultThemeTokenDataItalic = 'tokens___defaultThemeTokenData___italic',
    TokensDefaultThemeTokenDataUnderline = 'tokens___defaultThemeTokenData___underline',
    TokensAdditionalThemeTokenData = 'tokens___additionalThemeTokenData',
    TokensAdditionalThemeTokenDataThemeIdentifier = 'tokens___additionalThemeTokenData___themeIdentifier',
    TokensAdditionalThemeTokenDataClassName = 'tokens___additionalThemeTokenData___className',
    TokensAdditionalThemeTokenDataMeta = 'tokens___additionalThemeTokenData___meta',
    TokensAdditionalThemeTokenDataColor = 'tokens___additionalThemeTokenData___color',
    TokensAdditionalThemeTokenDataBold = 'tokens___additionalThemeTokenData___bold',
    TokensAdditionalThemeTokenDataItalic = 'tokens___additionalThemeTokenData___italic',
    TokensAdditionalThemeTokenDataUnderline = 'tokens___additionalThemeTokenData___underline',
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

  type GrvscCodeSpanFilterInput = {
    index?: Maybe<IntQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    text?: Maybe<StringQueryOperatorInput>;
    className?: Maybe<StringQueryOperatorInput>;
    language?: Maybe<StringQueryOperatorInput>;
    defaultTheme?: Maybe<GrvscThemeFilterInput>;
    additionalThemes?: Maybe<GrvscThemeFilterListInput>;
    tokens?: Maybe<GrvscTokenFilterListInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type GrvscCodeSpanSortInput = {
    fields?: Maybe<Array<Maybe<GrvscCodeSpanFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  enum GrvscDiff {
    Add = 'ADD',
    Del = 'DEL',
  }

  type GrvscDiffQueryOperatorInput = {
    eq?: Maybe<GrvscDiff>;
    ne?: Maybe<GrvscDiff>;
    in?: Maybe<Array<Maybe<GrvscDiff>>>;
    nin?: Maybe<Array<Maybe<GrvscDiff>>>;
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

  type GrvscStylesheetSortInput = {
    fields?: Maybe<Array<Maybe<GrvscStylesheetFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type GrvscThemeArgument = {
    identifier: Scalars['String'];
    conditions: Array<Scalars['String']>;
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

  type GrvscTokenizedLineFilterInput = {
    tokens?: Maybe<GrvscTokenFilterListInput>;
    text?: Maybe<StringQueryOperatorInput>;
    html?: Maybe<StringQueryOperatorInput>;
    attrs?: Maybe<JsonQueryOperatorInput>;
    className?: Maybe<StringQueryOperatorInput>;
    data?: Maybe<JsonQueryOperatorInput>;
    isHighlighted?: Maybe<BooleanQueryOperatorInput>;
    lineNumber?: Maybe<IntQueryOperatorInput>;
    diff?: Maybe<GrvscDiffQueryOperatorInput>;
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
    Inside = 'INSIDE',
    Outside = 'OUTSIDE',
  }

  enum ImageFormat {
    NoChange = 'NO_CHANGE',
    Jpg = 'JPG',
    Png = 'PNG',
    Webp = 'WEBP',
  }

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

  type ImageSharpOriginalFilterInput = {
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
  };

  type ImageSharpResizeFilterInput = {
    src?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    width?: Maybe<IntQueryOperatorInput>;
    height?: Maybe<IntQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
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

  type MarkdownHeadingFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
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
    HeadingsId = 'headings___id',
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
  };

  type MarkdownRemarkSortInput = {
    fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type MarkdownWordCountFilterInput = {
    paragraphs?: Maybe<IntQueryOperatorInput>;
    sentences?: Maybe<IntQueryOperatorInput>;
    words?: Maybe<IntQueryOperatorInput>;
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

  type NavigationJsonSortInput = {
    fields?: Maybe<Array<Maybe<NavigationJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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

  enum SiteBuildMetadataFieldsEnum {
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
    BuildTime = 'buildTime',
  }

  type SiteBuildMetadataFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
  };

  type SiteBuildMetadataSortInput = {
    fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  enum SiteFieldsEnum {
    BuildTime = 'buildTime',
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

  type SiteFilterInput = {
    buildTime?: Maybe<DateQueryOperatorInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type SitePageContextFilterInput = {
    frontmatter?: Maybe<SitePageContextFrontmatterFilterInput>;
    htmlAst?: Maybe<SitePageContextHtmlAstFilterInput>;
    previous?: Maybe<StringQueryOperatorInput>;
    next?: Maybe<StringQueryOperatorInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
  };

  type SitePageContextFrontmatterFilterInput = {
    date?: Maybe<DateQueryOperatorInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
    slug?: Maybe<StringQueryOperatorInput>;
    title?: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenFilterInput = {
    type?: Maybe<StringQueryOperatorInput>;
    value?: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextHtmlAstChildrenChildrenChildrenFilterListInput = {
    elemMatch?: Maybe<SitePageContextHtmlAstChildrenChildrenChildrenFilterInput>;
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

  type SitePageContextHtmlAstChildrenChildrenPropertiesFilterInput = {
    href?: Maybe<StringQueryOperatorInput>;
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

  type SitePageContextHtmlAstChildrenPropertiesFilterInput = {
    className?: Maybe<StringQueryOperatorInput>;
  };

  type SitePageContextHtmlAstDataFilterInput = {
    quirksMode?: Maybe<BooleanQueryOperatorInput>;
  };

  type SitePageContextHtmlAstFilterInput = {
    type?: Maybe<StringQueryOperatorInput>;
    children?: Maybe<SitePageContextHtmlAstChildrenFilterListInput>;
    data?: Maybe<SitePageContextHtmlAstDataFilterInput>;
  };

  enum SitePageFieldsEnum {
    Path = 'path',
    Component = 'component',
    InternalComponentName = 'internalComponentName',
    ComponentChunkName = 'componentChunkName',
    MatchPath = 'matchPath',
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
    PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
    PluginCreatorPluginOptionsFonts = 'pluginCreator___pluginOptions___fonts',
    PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
    PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
    PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
    PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
    PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
    PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
    PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
    PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
    PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
    PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
    PluginCreatorPluginOptionsWorkboxConfigGlobPatterns = 'pluginCreator___pluginOptions___workboxConfig___globPatterns',
    PluginCreatorPluginOptionsComponents = 'pluginCreator___pluginOptions___components',
    PluginCreatorPluginOptionsHooks = 'pluginCreator___pluginOptions___hooks',
    PluginCreatorPluginOptionsTemplates = 'pluginCreator___pluginOptions___templates',
    PluginCreatorPluginOptionsTheme = 'pluginCreator___pluginOptions___theme',
    PluginCreatorPluginOptionsUtils = 'pluginCreator___pluginOptions___utils',
    PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
    PluginCreatorPluginOptionsCenter = 'pluginCreator___pluginOptions___center',
    PluginCreatorPluginOptionsKey = 'pluginCreator___pluginOptions___key',
    PluginCreatorPluginOptionsStylesDark = 'pluginCreator___pluginOptions___styles___dark',
    PluginCreatorPluginOptionsStylesLight = 'pluginCreator___pluginOptions___styles___light',
    PluginCreatorPluginOptionsZoom = 'pluginCreator___pluginOptions___zoom',
    PluginCreatorPluginOptionsMaxWidth = 'pluginCreator___pluginOptions___maxWidth',
    PluginCreatorPluginOptionsQuality = 'pluginCreator___pluginOptions___quality',
    PluginCreatorPluginOptionsWithWebp = 'pluginCreator___pluginOptions___withWebp',
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

  type SitePageFilterInput = {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
  };

  type SitePageSortInput = {
    fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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
    PluginOptionsPluginsPluginOptionsTheme = 'pluginOptions___plugins___pluginOptions___theme',
    PluginOptionsPluginsNodeApIs = 'pluginOptions___plugins___nodeAPIs',
    PluginOptionsPluginsBrowserApIs = 'pluginOptions___plugins___browserAPIs',
    PluginOptionsPluginsPluginFilepath = 'pluginOptions___plugins___pluginFilepath',
    PluginOptionsDisplay = 'pluginOptions___display',
    PluginOptionsFonts = 'pluginOptions___fonts',
    PluginOptionsBackgroundColor = 'pluginOptions___background_color',
    PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
    PluginOptionsIcon = 'pluginOptions___icon',
    PluginOptionsName = 'pluginOptions___name',
    PluginOptionsShortName = 'pluginOptions___short_name',
    PluginOptionsStartUrl = 'pluginOptions___start_url',
    PluginOptionsThemeColor = 'pluginOptions___theme_color',
    PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
    PluginOptionsLegacy = 'pluginOptions___legacy',
    PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
    PluginOptionsWorkboxConfigGlobPatterns = 'pluginOptions___workboxConfig___globPatterns',
    PluginOptionsComponents = 'pluginOptions___components',
    PluginOptionsHooks = 'pluginOptions___hooks',
    PluginOptionsTemplates = 'pluginOptions___templates',
    PluginOptionsTheme = 'pluginOptions___theme',
    PluginOptionsUtils = 'pluginOptions___utils',
    PluginOptionsPath = 'pluginOptions___path',
    PluginOptionsCenter = 'pluginOptions___center',
    PluginOptionsKey = 'pluginOptions___key',
    PluginOptionsStylesDark = 'pluginOptions___styles___dark',
    PluginOptionsStylesDarkElement = 'pluginOptions___styles___dark___element',
    PluginOptionsStylesDarkFeature = 'pluginOptions___styles___dark___feature',
    PluginOptionsStylesLight = 'pluginOptions___styles___light',
    PluginOptionsStylesLightElement = 'pluginOptions___styles___light___element',
    PluginOptionsStylesLightFeature = 'pluginOptions___styles___light___feature',
    PluginOptionsZoom = 'pluginOptions___zoom',
    PluginOptionsMaxWidth = 'pluginOptions___maxWidth',
    PluginOptionsQuality = 'pluginOptions___quality',
    PluginOptionsWithWebp = 'pluginOptions___withWebp',
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

  type SitePluginPackageJsonDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
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

  type SitePluginPackageJsonPeerDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
  };

  type SitePluginPluginOptionsFilterInput = {
    plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
    display?: Maybe<StringQueryOperatorInput>;
    fonts?: Maybe<StringQueryOperatorInput>;
    background_color?: Maybe<StringQueryOperatorInput>;
    cache_busting_mode?: Maybe<StringQueryOperatorInput>;
    icon?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    short_name?: Maybe<StringQueryOperatorInput>;
    start_url?: Maybe<StringQueryOperatorInput>;
    theme_color?: Maybe<StringQueryOperatorInput>;
    include_favicon?: Maybe<BooleanQueryOperatorInput>;
    legacy?: Maybe<BooleanQueryOperatorInput>;
    theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
    workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfigFilterInput>;
    components?: Maybe<StringQueryOperatorInput>;
    hooks?: Maybe<StringQueryOperatorInput>;
    templates?: Maybe<StringQueryOperatorInput>;
    theme?: Maybe<StringQueryOperatorInput>;
    utils?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    center?: Maybe<StringQueryOperatorInput>;
    key?: Maybe<StringQueryOperatorInput>;
    styles?: Maybe<SitePluginPluginOptionsStylesFilterInput>;
    zoom?: Maybe<IntQueryOperatorInput>;
    maxWidth?: Maybe<IntQueryOperatorInput>;
    quality?: Maybe<IntQueryOperatorInput>;
    withWebp?: Maybe<BooleanQueryOperatorInput>;
    pathCheck?: Maybe<BooleanQueryOperatorInput>;
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

  type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
    maxWidth?: Maybe<IntQueryOperatorInput>;
    quality?: Maybe<IntQueryOperatorInput>;
    withWebp?: Maybe<BooleanQueryOperatorInput>;
    theme?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsStylesDarkFilterInput = {
    element?: Maybe<StringQueryOperatorInput>;
    rules?: Maybe<SitePluginPluginOptionsStylesDarkRulesFilterInput>;
    feature?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsStylesDarkFilterListInput = {
    elemMatch?: Maybe<SitePluginPluginOptionsStylesDarkFilterInput>;
  };

  type SitePluginPluginOptionsStylesDarkRulesFilterInput = {
    color?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsStylesFilterInput = {
    dark?: Maybe<SitePluginPluginOptionsStylesDarkFilterListInput>;
    light?: Maybe<SitePluginPluginOptionsStylesLightFilterListInput>;
  };

  type SitePluginPluginOptionsStylesLightFilterInput = {
    element?: Maybe<StringQueryOperatorInput>;
    rules?: Maybe<SitePluginPluginOptionsStylesLightRulesFilterInput>;
    feature?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsStylesLightFilterListInput = {
    elemMatch?: Maybe<SitePluginPluginOptionsStylesLightFilterInput>;
  };

  type SitePluginPluginOptionsStylesLightRulesFilterInput = {
    color?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginPluginOptionsWorkboxConfigFilterInput = {
    globPatterns?: Maybe<StringQueryOperatorInput>;
  };

  type SitePluginSortInput = {
    fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
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

  type SiteSiteMetadataRepositoryFilterInput = {
    type?: Maybe<StringQueryOperatorInput>;
    url?: Maybe<StringQueryOperatorInput>;
  };

  type SiteSortInput = {
    fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  enum SortOrderEnum {
    Asc = 'ASC',
    Desc = 'DESC',
  }

  enum StaticGmapsImageFieldsEnum {
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
    MapUrl = 'mapURL',
    Theme = 'theme',
    ChildFileSourceInstanceName = 'childFile___sourceInstanceName',
    ChildFileAbsolutePath = 'childFile___absolutePath',
    ChildFileRelativePath = 'childFile___relativePath',
    ChildFileExtension = 'childFile___extension',
    ChildFileSize = 'childFile___size',
    ChildFilePrettySize = 'childFile___prettySize',
    ChildFileModifiedTime = 'childFile___modifiedTime',
    ChildFileAccessTime = 'childFile___accessTime',
    ChildFileChangeTime = 'childFile___changeTime',
    ChildFileBirthTime = 'childFile___birthTime',
    ChildFileRoot = 'childFile___root',
    ChildFileDir = 'childFile___dir',
    ChildFileBase = 'childFile___base',
    ChildFileExt = 'childFile___ext',
    ChildFileName = 'childFile___name',
    ChildFileRelativeDirectory = 'childFile___relativeDirectory',
    ChildFileDev = 'childFile___dev',
    ChildFileMode = 'childFile___mode',
    ChildFileNlink = 'childFile___nlink',
    ChildFileUid = 'childFile___uid',
    ChildFileGid = 'childFile___gid',
    ChildFileRdev = 'childFile___rdev',
    ChildFileIno = 'childFile___ino',
    ChildFileAtimeMs = 'childFile___atimeMs',
    ChildFileMtimeMs = 'childFile___mtimeMs',
    ChildFileCtimeMs = 'childFile___ctimeMs',
    ChildFileAtime = 'childFile___atime',
    ChildFileMtime = 'childFile___mtime',
    ChildFileCtime = 'childFile___ctime',
    ChildFileBirthtime = 'childFile___birthtime',
    ChildFileBirthtimeMs = 'childFile___birthtimeMs',
    ChildFileBlksize = 'childFile___blksize',
    ChildFileBlocks = 'childFile___blocks',
    ChildFilePublicUrl = 'childFile___publicURL',
    ChildFileChildImageSharpFixedBase64 = 'childFile___childImageSharp___fixed___base64',
    ChildFileChildImageSharpFixedTracedSvg = 'childFile___childImageSharp___fixed___tracedSVG',
    ChildFileChildImageSharpFixedAspectRatio = 'childFile___childImageSharp___fixed___aspectRatio',
    ChildFileChildImageSharpFixedWidth = 'childFile___childImageSharp___fixed___width',
    ChildFileChildImageSharpFixedHeight = 'childFile___childImageSharp___fixed___height',
    ChildFileChildImageSharpFixedSrc = 'childFile___childImageSharp___fixed___src',
    ChildFileChildImageSharpFixedSrcSet = 'childFile___childImageSharp___fixed___srcSet',
    ChildFileChildImageSharpFixedSrcWebp = 'childFile___childImageSharp___fixed___srcWebp',
    ChildFileChildImageSharpFixedSrcSetWebp = 'childFile___childImageSharp___fixed___srcSetWebp',
    ChildFileChildImageSharpFixedOriginalName = 'childFile___childImageSharp___fixed___originalName',
    ChildFileChildImageSharpResolutionsBase64 = 'childFile___childImageSharp___resolutions___base64',
    ChildFileChildImageSharpResolutionsTracedSvg = 'childFile___childImageSharp___resolutions___tracedSVG',
    ChildFileChildImageSharpResolutionsAspectRatio = 'childFile___childImageSharp___resolutions___aspectRatio',
    ChildFileChildImageSharpResolutionsWidth = 'childFile___childImageSharp___resolutions___width',
    ChildFileChildImageSharpResolutionsHeight = 'childFile___childImageSharp___resolutions___height',
    ChildFileChildImageSharpResolutionsSrc = 'childFile___childImageSharp___resolutions___src',
    ChildFileChildImageSharpResolutionsSrcSet = 'childFile___childImageSharp___resolutions___srcSet',
    ChildFileChildImageSharpResolutionsSrcWebp = 'childFile___childImageSharp___resolutions___srcWebp',
    ChildFileChildImageSharpResolutionsSrcSetWebp = 'childFile___childImageSharp___resolutions___srcSetWebp',
    ChildFileChildImageSharpResolutionsOriginalName = 'childFile___childImageSharp___resolutions___originalName',
    ChildFileChildImageSharpFluidBase64 = 'childFile___childImageSharp___fluid___base64',
    ChildFileChildImageSharpFluidTracedSvg = 'childFile___childImageSharp___fluid___tracedSVG',
    ChildFileChildImageSharpFluidAspectRatio = 'childFile___childImageSharp___fluid___aspectRatio',
    ChildFileChildImageSharpFluidSrc = 'childFile___childImageSharp___fluid___src',
    ChildFileChildImageSharpFluidSrcSet = 'childFile___childImageSharp___fluid___srcSet',
    ChildFileChildImageSharpFluidSrcWebp = 'childFile___childImageSharp___fluid___srcWebp',
    ChildFileChildImageSharpFluidSrcSetWebp = 'childFile___childImageSharp___fluid___srcSetWebp',
    ChildFileChildImageSharpFluidSizes = 'childFile___childImageSharp___fluid___sizes',
    ChildFileChildImageSharpFluidOriginalImg = 'childFile___childImageSharp___fluid___originalImg',
    ChildFileChildImageSharpFluidOriginalName = 'childFile___childImageSharp___fluid___originalName',
    ChildFileChildImageSharpFluidPresentationWidth = 'childFile___childImageSharp___fluid___presentationWidth',
    ChildFileChildImageSharpFluidPresentationHeight = 'childFile___childImageSharp___fluid___presentationHeight',
    ChildFileChildImageSharpSizesBase64 = 'childFile___childImageSharp___sizes___base64',
    ChildFileChildImageSharpSizesTracedSvg = 'childFile___childImageSharp___sizes___tracedSVG',
    ChildFileChildImageSharpSizesAspectRatio = 'childFile___childImageSharp___sizes___aspectRatio',
    ChildFileChildImageSharpSizesSrc = 'childFile___childImageSharp___sizes___src',
    ChildFileChildImageSharpSizesSrcSet = 'childFile___childImageSharp___sizes___srcSet',
    ChildFileChildImageSharpSizesSrcWebp = 'childFile___childImageSharp___sizes___srcWebp',
    ChildFileChildImageSharpSizesSrcSetWebp = 'childFile___childImageSharp___sizes___srcSetWebp',
    ChildFileChildImageSharpSizesSizes = 'childFile___childImageSharp___sizes___sizes',
    ChildFileChildImageSharpSizesOriginalImg = 'childFile___childImageSharp___sizes___originalImg',
    ChildFileChildImageSharpSizesOriginalName = 'childFile___childImageSharp___sizes___originalName',
    ChildFileChildImageSharpSizesPresentationWidth = 'childFile___childImageSharp___sizes___presentationWidth',
    ChildFileChildImageSharpSizesPresentationHeight = 'childFile___childImageSharp___sizes___presentationHeight',
    ChildFileChildImageSharpOriginalWidth = 'childFile___childImageSharp___original___width',
    ChildFileChildImageSharpOriginalHeight = 'childFile___childImageSharp___original___height',
    ChildFileChildImageSharpOriginalSrc = 'childFile___childImageSharp___original___src',
    ChildFileChildImageSharpResizeSrc = 'childFile___childImageSharp___resize___src',
    ChildFileChildImageSharpResizeTracedSvg = 'childFile___childImageSharp___resize___tracedSVG',
    ChildFileChildImageSharpResizeWidth = 'childFile___childImageSharp___resize___width',
    ChildFileChildImageSharpResizeHeight = 'childFile___childImageSharp___resize___height',
    ChildFileChildImageSharpResizeAspectRatio = 'childFile___childImageSharp___resize___aspectRatio',
    ChildFileChildImageSharpResizeOriginalName = 'childFile___childImageSharp___resize___originalName',
    ChildFileChildImageSharpId = 'childFile___childImageSharp___id',
    ChildFileChildImageSharpParentId = 'childFile___childImageSharp___parent___id',
    ChildFileChildImageSharpParentChildren = 'childFile___childImageSharp___parent___children',
    ChildFileChildImageSharpChildren = 'childFile___childImageSharp___children',
    ChildFileChildImageSharpChildrenId = 'childFile___childImageSharp___children___id',
    ChildFileChildImageSharpChildrenChildren = 'childFile___childImageSharp___children___children',
    ChildFileChildImageSharpInternalContent = 'childFile___childImageSharp___internal___content',
    ChildFileChildImageSharpInternalContentDigest = 'childFile___childImageSharp___internal___contentDigest',
    ChildFileChildImageSharpInternalDescription = 'childFile___childImageSharp___internal___description',
    ChildFileChildImageSharpInternalFieldOwners = 'childFile___childImageSharp___internal___fieldOwners',
    ChildFileChildImageSharpInternalIgnoreType = 'childFile___childImageSharp___internal___ignoreType',
    ChildFileChildImageSharpInternalMediaType = 'childFile___childImageSharp___internal___mediaType',
    ChildFileChildImageSharpInternalOwner = 'childFile___childImageSharp___internal___owner',
    ChildFileChildImageSharpInternalType = 'childFile___childImageSharp___internal___type',
    ChildFileId = 'childFile___id',
    ChildFileParentId = 'childFile___parent___id',
    ChildFileParentParentId = 'childFile___parent___parent___id',
    ChildFileParentParentChildren = 'childFile___parent___parent___children',
    ChildFileParentChildren = 'childFile___parent___children',
    ChildFileParentChildrenId = 'childFile___parent___children___id',
    ChildFileParentChildrenChildren = 'childFile___parent___children___children',
    ChildFileParentInternalContent = 'childFile___parent___internal___content',
    ChildFileParentInternalContentDigest = 'childFile___parent___internal___contentDigest',
    ChildFileParentInternalDescription = 'childFile___parent___internal___description',
    ChildFileParentInternalFieldOwners = 'childFile___parent___internal___fieldOwners',
    ChildFileParentInternalIgnoreType = 'childFile___parent___internal___ignoreType',
    ChildFileParentInternalMediaType = 'childFile___parent___internal___mediaType',
    ChildFileParentInternalOwner = 'childFile___parent___internal___owner',
    ChildFileParentInternalType = 'childFile___parent___internal___type',
    ChildFileChildren = 'childFile___children',
    ChildFileChildrenId = 'childFile___children___id',
    ChildFileChildrenParentId = 'childFile___children___parent___id',
    ChildFileChildrenParentChildren = 'childFile___children___parent___children',
    ChildFileChildrenChildren = 'childFile___children___children',
    ChildFileChildrenChildrenId = 'childFile___children___children___id',
    ChildFileChildrenChildrenChildren = 'childFile___children___children___children',
    ChildFileChildrenInternalContent = 'childFile___children___internal___content',
    ChildFileChildrenInternalContentDigest = 'childFile___children___internal___contentDigest',
    ChildFileChildrenInternalDescription = 'childFile___children___internal___description',
    ChildFileChildrenInternalFieldOwners = 'childFile___children___internal___fieldOwners',
    ChildFileChildrenInternalIgnoreType = 'childFile___children___internal___ignoreType',
    ChildFileChildrenInternalMediaType = 'childFile___children___internal___mediaType',
    ChildFileChildrenInternalOwner = 'childFile___children___internal___owner',
    ChildFileChildrenInternalType = 'childFile___children___internal___type',
    ChildFileInternalContent = 'childFile___internal___content',
    ChildFileInternalContentDigest = 'childFile___internal___contentDigest',
    ChildFileInternalDescription = 'childFile___internal___description',
    ChildFileInternalFieldOwners = 'childFile___internal___fieldOwners',
    ChildFileInternalIgnoreType = 'childFile___internal___ignoreType',
    ChildFileInternalMediaType = 'childFile___internal___mediaType',
    ChildFileInternalOwner = 'childFile___internal___owner',
    ChildFileInternalType = 'childFile___internal___type',
    ChildFileChildDataJsonId = 'childFile___childDataJson___id',
    ChildFileChildDataJsonParentId = 'childFile___childDataJson___parent___id',
    ChildFileChildDataJsonParentChildren = 'childFile___childDataJson___parent___children',
    ChildFileChildDataJsonChildren = 'childFile___childDataJson___children',
    ChildFileChildDataJsonChildrenId = 'childFile___childDataJson___children___id',
    ChildFileChildDataJsonChildrenChildren = 'childFile___childDataJson___children___children',
    ChildFileChildDataJsonInternalContent = 'childFile___childDataJson___internal___content',
    ChildFileChildDataJsonInternalContentDigest = 'childFile___childDataJson___internal___contentDigest',
    ChildFileChildDataJsonInternalDescription = 'childFile___childDataJson___internal___description',
    ChildFileChildDataJsonInternalFieldOwners = 'childFile___childDataJson___internal___fieldOwners',
    ChildFileChildDataJsonInternalIgnoreType = 'childFile___childDataJson___internal___ignoreType',
    ChildFileChildDataJsonInternalMediaType = 'childFile___childDataJson___internal___mediaType',
    ChildFileChildDataJsonInternalOwner = 'childFile___childDataJson___internal___owner',
    ChildFileChildDataJsonInternalType = 'childFile___childDataJson___internal___type',
    ChildFileChildDataJsonCompanyName = 'childFile___childDataJson___company___name',
    ChildFileChildDataJsonCompanyWebsite = 'childFile___childDataJson___company___website',
    ChildFileChildDataJsonContacts = 'childFile___childDataJson___contacts',
    ChildFileChildDataJsonContactsLabel = 'childFile___childDataJson___contacts___label',
    ChildFileChildDataJsonContactsType = 'childFile___childDataJson___contacts___type',
    ChildFileChildDataJsonContactsUrl = 'childFile___childDataJson___contacts___url',
    ChildFileChildDataJsonJobTitle = 'childFile___childDataJson___jobTitle',
    ChildFileChildDataJsonLocationCity = 'childFile___childDataJson___location___city',
    ChildFileChildDataJsonLocationCountry = 'childFile___childDataJson___location___country',
    ChildFileChildDataJsonLocationLat = 'childFile___childDataJson___location___lat',
    ChildFileChildDataJsonLocationLng = 'childFile___childDataJson___location___lng',
    ChildFileChildDataJsonLocationWebsite = 'childFile___childDataJson___location___website',
    ChildFileChildDataJsonOpenToGigs = 'childFile___childDataJson___openToGigs',
    ChildFileChildDataJsonResumeLink = 'childFile___childDataJson___resumeLink',
    ChildFileChildrenNavigationJson = 'childFile___childrenNavigationJson',
    ChildFileChildrenNavigationJsonId = 'childFile___childrenNavigationJson___id',
    ChildFileChildrenNavigationJsonParentId = 'childFile___childrenNavigationJson___parent___id',
    ChildFileChildrenNavigationJsonParentChildren = 'childFile___childrenNavigationJson___parent___children',
    ChildFileChildrenNavigationJsonChildren = 'childFile___childrenNavigationJson___children',
    ChildFileChildrenNavigationJsonChildrenId = 'childFile___childrenNavigationJson___children___id',
    ChildFileChildrenNavigationJsonChildrenChildren = 'childFile___childrenNavigationJson___children___children',
    ChildFileChildrenNavigationJsonInternalContent = 'childFile___childrenNavigationJson___internal___content',
    ChildFileChildrenNavigationJsonInternalContentDigest = 'childFile___childrenNavigationJson___internal___contentDigest',
    ChildFileChildrenNavigationJsonInternalDescription = 'childFile___childrenNavigationJson___internal___description',
    ChildFileChildrenNavigationJsonInternalFieldOwners = 'childFile___childrenNavigationJson___internal___fieldOwners',
    ChildFileChildrenNavigationJsonInternalIgnoreType = 'childFile___childrenNavigationJson___internal___ignoreType',
    ChildFileChildrenNavigationJsonInternalMediaType = 'childFile___childrenNavigationJson___internal___mediaType',
    ChildFileChildrenNavigationJsonInternalOwner = 'childFile___childrenNavigationJson___internal___owner',
    ChildFileChildrenNavigationJsonInternalType = 'childFile___childrenNavigationJson___internal___type',
    ChildFileChildrenNavigationJsonIcon = 'childFile___childrenNavigationJson___icon',
    ChildFileChildrenNavigationJsonKeywords = 'childFile___childrenNavigationJson___keywords',
    ChildFileChildrenNavigationJsonName = 'childFile___childrenNavigationJson___name',
    ChildFileChildrenNavigationJsonNavOrder = 'childFile___childrenNavigationJson___navOrder',
    ChildFileChildrenNavigationJsonPage = 'childFile___childrenNavigationJson___page',
    ChildFileChildrenNavigationJsonTo = 'childFile___childrenNavigationJson___to',
    ChildFileChildrenNavigationJsonIgnoreInNavigation = 'childFile___childrenNavigationJson___ignoreInNavigation',
    ChildFileChildrenTechnologiesJson = 'childFile___childrenTechnologiesJson',
    ChildFileChildrenTechnologiesJsonId = 'childFile___childrenTechnologiesJson___id',
    ChildFileChildrenTechnologiesJsonParentId = 'childFile___childrenTechnologiesJson___parent___id',
    ChildFileChildrenTechnologiesJsonParentChildren = 'childFile___childrenTechnologiesJson___parent___children',
    ChildFileChildrenTechnologiesJsonChildren = 'childFile___childrenTechnologiesJson___children',
    ChildFileChildrenTechnologiesJsonChildrenId = 'childFile___childrenTechnologiesJson___children___id',
    ChildFileChildrenTechnologiesJsonChildrenChildren = 'childFile___childrenTechnologiesJson___children___children',
    ChildFileChildrenTechnologiesJsonInternalContent = 'childFile___childrenTechnologiesJson___internal___content',
    ChildFileChildrenTechnologiesJsonInternalContentDigest = 'childFile___childrenTechnologiesJson___internal___contentDigest',
    ChildFileChildrenTechnologiesJsonInternalDescription = 'childFile___childrenTechnologiesJson___internal___description',
    ChildFileChildrenTechnologiesJsonInternalFieldOwners = 'childFile___childrenTechnologiesJson___internal___fieldOwners',
    ChildFileChildrenTechnologiesJsonInternalIgnoreType = 'childFile___childrenTechnologiesJson___internal___ignoreType',
    ChildFileChildrenTechnologiesJsonInternalMediaType = 'childFile___childrenTechnologiesJson___internal___mediaType',
    ChildFileChildrenTechnologiesJsonInternalOwner = 'childFile___childrenTechnologiesJson___internal___owner',
    ChildFileChildrenTechnologiesJsonInternalType = 'childFile___childrenTechnologiesJson___internal___type',
    ChildFileChildrenTechnologiesJsonImg = 'childFile___childrenTechnologiesJson___img',
    ChildFileChildrenTechnologiesJsonName = 'childFile___childrenTechnologiesJson___name',
    ChildFileChildrenTechnologiesJsonWebsite = 'childFile___childrenTechnologiesJson___website',
    ChildFileChildThemeJsonId = 'childFile___childThemeJson___id',
    ChildFileChildThemeJsonParentId = 'childFile___childThemeJson___parent___id',
    ChildFileChildThemeJsonParentChildren = 'childFile___childThemeJson___parent___children',
    ChildFileChildThemeJsonChildren = 'childFile___childThemeJson___children',
    ChildFileChildThemeJsonChildrenId = 'childFile___childThemeJson___children___id',
    ChildFileChildThemeJsonChildrenChildren = 'childFile___childThemeJson___children___children',
    ChildFileChildThemeJsonInternalContent = 'childFile___childThemeJson___internal___content',
    ChildFileChildThemeJsonInternalContentDigest = 'childFile___childThemeJson___internal___contentDigest',
    ChildFileChildThemeJsonInternalDescription = 'childFile___childThemeJson___internal___description',
    ChildFileChildThemeJsonInternalFieldOwners = 'childFile___childThemeJson___internal___fieldOwners',
    ChildFileChildThemeJsonInternalIgnoreType = 'childFile___childThemeJson___internal___ignoreType',
    ChildFileChildThemeJsonInternalMediaType = 'childFile___childThemeJson___internal___mediaType',
    ChildFileChildThemeJsonInternalOwner = 'childFile___childThemeJson___internal___owner',
    ChildFileChildThemeJsonInternalType = 'childFile___childThemeJson___internal___type',
    ChildFileChildThemeJsonColorsBlack = 'childFile___childThemeJson___colors___black',
    ChildFileChildThemeJsonColorsDark = 'childFile___childThemeJson___colors___dark',
    ChildFileChildThemeJsonColorsError = 'childFile___childThemeJson___colors___error',
    ChildFileChildThemeJsonColorsGray = 'childFile___childThemeJson___colors___gray',
    ChildFileChildThemeJsonColorsInfo = 'childFile___childThemeJson___colors___info',
    ChildFileChildThemeJsonColorsLightgray = 'childFile___childThemeJson___colors___lightgray',
    ChildFileChildThemeJsonColorsPrimary = 'childFile___childThemeJson___colors___primary',
    ChildFileChildThemeJsonColorsSecondary = 'childFile___childThemeJson___colors___secondary',
    ChildFileChildThemeJsonColorsSuccess = 'childFile___childThemeJson___colors___success',
    ChildFileChildThemeJsonColorsVsCodeDark = 'childFile___childThemeJson___colors___vsCodeDark',
    ChildFileChildThemeJsonColorsWhite = 'childFile___childThemeJson___colors___white',
    ChildFileChildThemeJsonFontsMain = 'childFile___childThemeJson___fonts___main',
    ChildFileChildThemeJsonFontWeightsBold = 'childFile___childThemeJson___fontWeights___bold',
    ChildFileChildThemeJsonFontWeightsRegular = 'childFile___childThemeJson___fontWeights___regular',
    ChildFileChildThemeJsonFontWeightsSemiBold = 'childFile___childThemeJson___fontWeights___semiBold',
    ChildFileChildMarkdownRemarkId = 'childFile___childMarkdownRemark___id',
    ChildFileChildMarkdownRemarkFrontmatterDate = 'childFile___childMarkdownRemark___frontmatter___date',
    ChildFileChildMarkdownRemarkFrontmatterKeywords = 'childFile___childMarkdownRemark___frontmatter___keywords',
    ChildFileChildMarkdownRemarkFrontmatterSlug = 'childFile___childMarkdownRemark___frontmatter___slug',
    ChildFileChildMarkdownRemarkFrontmatterTags = 'childFile___childMarkdownRemark___frontmatter___tags',
    ChildFileChildMarkdownRemarkFrontmatterTitle = 'childFile___childMarkdownRemark___frontmatter___title',
    ChildFileChildMarkdownRemarkExcerpt = 'childFile___childMarkdownRemark___excerpt',
    ChildFileChildMarkdownRemarkRawMarkdownBody = 'childFile___childMarkdownRemark___rawMarkdownBody',
    ChildFileChildMarkdownRemarkFileAbsolutePath = 'childFile___childMarkdownRemark___fileAbsolutePath',
    ChildFileChildMarkdownRemarkHtml = 'childFile___childMarkdownRemark___html',
    ChildFileChildMarkdownRemarkHtmlAst = 'childFile___childMarkdownRemark___htmlAst',
    ChildFileChildMarkdownRemarkExcerptAst = 'childFile___childMarkdownRemark___excerptAst',
    ChildFileChildMarkdownRemarkHeadings = 'childFile___childMarkdownRemark___headings',
    ChildFileChildMarkdownRemarkHeadingsId = 'childFile___childMarkdownRemark___headings___id',
    ChildFileChildMarkdownRemarkHeadingsValue = 'childFile___childMarkdownRemark___headings___value',
    ChildFileChildMarkdownRemarkHeadingsDepth = 'childFile___childMarkdownRemark___headings___depth',
    ChildFileChildMarkdownRemarkTimeToRead = 'childFile___childMarkdownRemark___timeToRead',
    ChildFileChildMarkdownRemarkTableOfContents = 'childFile___childMarkdownRemark___tableOfContents',
    ChildFileChildMarkdownRemarkWordCountParagraphs = 'childFile___childMarkdownRemark___wordCount___paragraphs',
    ChildFileChildMarkdownRemarkWordCountSentences = 'childFile___childMarkdownRemark___wordCount___sentences',
    ChildFileChildMarkdownRemarkWordCountWords = 'childFile___childMarkdownRemark___wordCount___words',
    ChildFileChildMarkdownRemarkParentId = 'childFile___childMarkdownRemark___parent___id',
    ChildFileChildMarkdownRemarkParentChildren = 'childFile___childMarkdownRemark___parent___children',
    ChildFileChildMarkdownRemarkChildren = 'childFile___childMarkdownRemark___children',
    ChildFileChildMarkdownRemarkChildrenId = 'childFile___childMarkdownRemark___children___id',
    ChildFileChildMarkdownRemarkChildrenChildren = 'childFile___childMarkdownRemark___children___children',
    ChildFileChildMarkdownRemarkInternalContent = 'childFile___childMarkdownRemark___internal___content',
    ChildFileChildMarkdownRemarkInternalContentDigest = 'childFile___childMarkdownRemark___internal___contentDigest',
    ChildFileChildMarkdownRemarkInternalDescription = 'childFile___childMarkdownRemark___internal___description',
    ChildFileChildMarkdownRemarkInternalFieldOwners = 'childFile___childMarkdownRemark___internal___fieldOwners',
    ChildFileChildMarkdownRemarkInternalIgnoreType = 'childFile___childMarkdownRemark___internal___ignoreType',
    ChildFileChildMarkdownRemarkInternalMediaType = 'childFile___childMarkdownRemark___internal___mediaType',
    ChildFileChildMarkdownRemarkInternalOwner = 'childFile___childMarkdownRemark___internal___owner',
    ChildFileChildMarkdownRemarkInternalType = 'childFile___childMarkdownRemark___internal___type',
  }

  type StaticGmapsImageFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    mapURL?: Maybe<StringQueryOperatorInput>;
    theme?: Maybe<StringQueryOperatorInput>;
    childFile?: Maybe<FileFilterInput>;
  };

  type StaticGmapsImageSortInput = {
    fields?: Maybe<Array<Maybe<StaticGmapsImageFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type StringQueryOperatorInput = {
    eq?: Maybe<Scalars['String']>;
    ne?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Maybe<Scalars['String']>>>;
    nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    regex?: Maybe<Scalars['String']>;
    glob?: Maybe<Scalars['String']>;
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

  type TechnologiesJsonSortInput = {
    fields?: Maybe<Array<Maybe<TechnologiesJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type ThemeJsonColorsFilterInput = {
    black?: Maybe<StringQueryOperatorInput>;
    dark?: Maybe<StringQueryOperatorInput>;
    error?: Maybe<StringQueryOperatorInput>;
    gray?: Maybe<StringQueryOperatorInput>;
    info?: Maybe<StringQueryOperatorInput>;
    lightgray?: Maybe<StringQueryOperatorInput>;
    primary?: Maybe<StringQueryOperatorInput>;
    secondary?: Maybe<StringQueryOperatorInput>;
    success?: Maybe<StringQueryOperatorInput>;
    vsCodeDark?: Maybe<StringQueryOperatorInput>;
    white?: Maybe<StringQueryOperatorInput>;
  };

  enum ThemeJsonFieldsEnum {
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
    ColorsBlack = 'colors___black',
    ColorsDark = 'colors___dark',
    ColorsError = 'colors___error',
    ColorsGray = 'colors___gray',
    ColorsInfo = 'colors___info',
    ColorsLightgray = 'colors___lightgray',
    ColorsPrimary = 'colors___primary',
    ColorsSecondary = 'colors___secondary',
    ColorsSuccess = 'colors___success',
    ColorsVsCodeDark = 'colors___vsCodeDark',
    ColorsWhite = 'colors___white',
    FontsMain = 'fonts___main',
    FontWeightsBold = 'fontWeights___bold',
    FontWeightsRegular = 'fontWeights___regular',
    FontWeightsSemiBold = 'fontWeights___semiBold',
  }

  type ThemeJsonFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    colors?: Maybe<ThemeJsonColorsFilterInput>;
    fonts?: Maybe<ThemeJsonFontsFilterInput>;
    fontWeights?: Maybe<ThemeJsonFontWeightsFilterInput>;
  };

  type ThemeJsonFontsFilterInput = {
    main?: Maybe<StringQueryOperatorInput>;
  };

  type ThemeJsonFontWeightsFilterInput = {
    bold?: Maybe<IntQueryOperatorInput>;
    regular?: Maybe<IntQueryOperatorInput>;
    semiBold?: Maybe<IntQueryOperatorInput>;
  };

  type ThemeJsonSortInput = {
    fields?: Maybe<Array<Maybe<ThemeJsonFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
  };

  type GatsbyImageSharpFixedFragment = {
    base64?: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
  };

  type GatsbyImageSharpFixed_TracedSvgFragment = {
    tracedSVG?: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
  };

  type GatsbyImageSharpFixed_WithWebpFragment = {
    base64?: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp?: Maybe<string>;
    srcSetWebp?: Maybe<string>;
  };

  type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
    tracedSVG?: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp?: Maybe<string>;
    srcSetWebp?: Maybe<string>;
  };

  type GatsbyImageSharpFixed_NoBase64Fragment = { width: number; height: number; src: string; srcSet: string };

  type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp?: Maybe<string>;
    srcSetWebp?: Maybe<string>;
  };

  type GatsbyImageSharpFluidFragment = {
    base64?: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
  };

  type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number; maxWidth: number };

  type GatsbyImageSharpFluid_TracedSvgFragment = {
    tracedSVG?: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
  };

  type GatsbyImageSharpFluid_WithWebpFragment = {
    base64?: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp?: Maybe<string>;
    srcSetWebp?: Maybe<string>;
    sizes: string;
  };

  type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
    tracedSVG?: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp?: Maybe<string>;
    srcSetWebp?: Maybe<string>;
    sizes: string;
  };

  type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number; src: string; srcSet: string; sizes: string };

  type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp?: Maybe<string>;
    srcSetWebp?: Maybe<string>;
    sizes: string;
  };

  type GatsbyImageSharpResolutionsFragment = {
    base64?: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
  };

  type GatsbyImageSharpResolutions_TracedSvgFragment = {
    tracedSVG?: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
  };

  type GatsbyImageSharpResolutions_WithWebpFragment = {
    base64?: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp?: Maybe<string>;
    srcSetWebp?: Maybe<string>;
  };

  type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = {
    tracedSVG?: Maybe<string>;
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp?: Maybe<string>;
    srcSetWebp?: Maybe<string>;
  };

  type GatsbyImageSharpResolutions_NoBase64Fragment = { width: number; height: number; src: string; srcSet: string };

  type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = {
    width: number;
    height: number;
    src: string;
    srcSet: string;
    srcWebp?: Maybe<string>;
    srcSetWebp?: Maybe<string>;
  };

  type GatsbyImageSharpSizesFragment = {
    base64?: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
  };

  type GatsbyImageSharpSizes_TracedSvgFragment = {
    tracedSVG?: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
  };

  type GatsbyImageSharpSizes_WithWebpFragment = {
    base64?: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp?: Maybe<string>;
    srcSetWebp?: Maybe<string>;
    sizes: string;
  };

  type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = {
    tracedSVG?: Maybe<string>;
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp?: Maybe<string>;
    srcSetWebp?: Maybe<string>;
    sizes: string;
  };

  type GatsbyImageSharpSizes_NoBase64Fragment = { aspectRatio: number; src: string; srcSet: string; sizes: string };

  type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = {
    aspectRatio: number;
    src: string;
    srcSet: string;
    srcWebp?: Maybe<string>;
    srcSetWebp?: Maybe<string>;
    sizes: string;
  };

  type FooterDataQueryVariables = Exact<{ [key: string]: never }>;

  type FooterDataQuery = {
    site?: Maybe<{
      siteMetadata?: Maybe<{
        license?: Maybe<string>;
        version?: Maybe<string>;
        repository?: Maybe<{ url?: Maybe<string> }>;
      }>;
    }>;
  };

  type HeaderDataQueryVariables = Exact<{ [key: string]: never }>;

  type HeaderDataQuery = {
    dataJson?: Maybe<{ jobTitle?: Maybe<string> }>;
    file?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_WithWebpFragment> }> }>;
  };

  type NavigationDataQueryVariables = Exact<{ [key: string]: never }>;

  type NavigationDataQuery = {
    allMarkdownRemark: { totalCount: number };
    allNavigationJson: {
      nodes: Array<{
        icon?: Maybe<string>;
        ignoreInNavigation?: Maybe<boolean>;
        keywords?: Maybe<Array<Maybe<string>>>;
        name?: Maybe<string>;
        navOrder?: Maybe<number>;
        to?: Maybe<string>;
      }>;
    };
    dataJson?: Maybe<{ resumeLink?: Maybe<string> }>;
  };

  type LocationMapDataQueryVariables = Exact<{ [key: string]: never }>;

  type LocationMapDataQuery = {
    gmapsImgs: {
      nodes: Array<{
        mapURL?: Maybe<string>;
        theme?: Maybe<string>;
        childFile?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_WithWebpFragment> }> }>;
      }>;
    };
  };

  type SeoDataQueryVariables = Exact<{ [key: string]: never }>;

  type SeoDataQuery = {
    banner?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<{ src: string }> }> }>;
    site?: Maybe<{
      siteMetadata?: Maybe<{
        description?: Maybe<string>;
        siteUrl?: Maybe<string>;
        title?: Maybe<string>;
        twitterUsername?: Maybe<string>;
      }>;
    }>;
  };

  type ThemeDataQueryVariables = Exact<{ [key: string]: never }>;

  type ThemeDataQuery = {
    themeJson?: Maybe<{
      colors?: Maybe<{
        black?: Maybe<string>;
        dark?: Maybe<string>;
        error?: Maybe<string>;
        gray?: Maybe<string>;
        info?: Maybe<string>;
        lightgray?: Maybe<string>;
        primary?: Maybe<string>;
        secondary?: Maybe<string>;
        success?: Maybe<string>;
        vsCodeDark?: Maybe<string>;
        white?: Maybe<string>;
      }>;
      fontWeights?: Maybe<{ bold?: Maybe<number>; regular?: Maybe<number>; semiBold?: Maybe<number> }>;
      fonts?: Maybe<{ main?: Maybe<string> }>;
    }>;
  };

  type NotFoundPageQueryVariables = Exact<{ [key: string]: never }>;

  type NotFoundPageQuery = { pageData?: Maybe<{ keywords?: Maybe<Array<Maybe<string>>>; name?: Maybe<string> }> };

  type AboutMePageDataQueryVariables = Exact<{ [key: string]: never }>;

  type AboutMePageDataQuery = {
    companyImg?: Maybe<{ childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_WithWebpFragment> }> }>;
    coverImg?: Maybe<{ childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_WithWebpFragment> }> }>;
    pageData?: Maybe<{ keywords?: Maybe<Array<Maybe<string>>>; name?: Maybe<string> }>;
    personalDetails?: Maybe<{
      jobTitle?: Maybe<string>;
      openToGigs?: Maybe<boolean>;
      company?: Maybe<{ name?: Maybe<string>; website?: Maybe<string> }>;
      contacts?: Maybe<Array<Maybe<{ label?: Maybe<string>; type?: Maybe<string>; url?: Maybe<string> }>>>;
      location?: Maybe<{ city?: Maybe<string>; website?: Maybe<string> }>;
    }>;
    techImgs: {
      nodes: Array<{
        base: string;
        childImageSharp?: Maybe<{ fixed?: Maybe<GatsbyImageSharpFixed_WithWebpFragment> }>;
      }>;
    };
    techs: { nodes: Array<{ img?: Maybe<string>; name?: Maybe<string>; website?: Maybe<string> }> };
  };

  type IndexPageQueryVariables = Exact<{ [key: string]: never }>;

  type IndexPageQuery = { pageData?: Maybe<{ keywords?: Maybe<Array<Maybe<string>>>; name?: Maybe<string> }> };

  type PostsPageQueryVariables = Exact<{ [key: string]: never }>;

  type PostsPageQuery = {
    mdData: { nodes: Array<{ frontmatter: { date: string; slug: string; title: string } }> };
    pageData?: Maybe<{ keywords?: Maybe<Array<Maybe<string>>>; name?: Maybe<string> }>;
  };
}
