declare namespace GraphQL {
    type Maybe<T> = T | null;
    /** All built-in and custom scalars, mapped to their actual values */
    type Scalars = {
        ID: string;
        String: string;
        Boolean: boolean;
        Int: number;
        Float: number;
        /**
         * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
         * representation of dates and times using the Gregorian calendar.
         **/
        Date: any;
        /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
        JSON: any;
    };

    type BooleanQueryOperatorInput = {
        eq?: Maybe<Scalars['Boolean']>;
        ne?: Maybe<Scalars['Boolean']>;
        in?: Maybe<Maybe<Scalars['Boolean']>[]>;
        nin?: Maybe<Maybe<Scalars['Boolean']>[]>;
    };

    type DataJson = Node & {
        __typename?: 'DataJson';
        id: Scalars['ID'];
        parent?: Maybe<Node>;
        children: Node[];
        internal: Internal;
        company?: Maybe<DataJsonCompany>;
        contacts?: Maybe<Maybe<DataJsonContacts>[]>;
        jobTitle?: Maybe<Scalars['String']>;
        location?: Maybe<DataJsonLocation>;
    };

    type DataJsonCompany = {
        __typename?: 'DataJsonCompany';
        name?: Maybe<Scalars['String']>;
        website?: Maybe<Scalars['String']>;
    };

    type DataJsonCompanyFilterInput = {
        name?: Maybe<StringQueryOperatorInput>;
        website?: Maybe<StringQueryOperatorInput>;
    };

    type DataJsonConnection = {
        __typename?: 'DataJsonConnection';
        totalCount: Scalars['Int'];
        edges: DataJsonEdge[];
        nodes: DataJson[];
        pageInfo: PageInfo;
        distinct: Scalars['String'][];
        group: DataJsonGroupConnection[];
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
        __typename?: 'DataJsonContacts';
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
        __typename?: 'DataJsonEdge';
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
    };

    type DataJsonGroupConnection = {
        __typename?: 'DataJsonGroupConnection';
        totalCount: Scalars['Int'];
        edges: DataJsonEdge[];
        nodes: DataJson[];
        pageInfo: PageInfo;
        field: Scalars['String'];
        fieldValue?: Maybe<Scalars['String']>;
    };

    type DataJsonLocation = {
        __typename?: 'DataJsonLocation';
        city?: Maybe<Scalars['String']>;
        country?: Maybe<Scalars['String']>;
        lat?: Maybe<Scalars['Float']>;
        lng?: Maybe<Scalars['Float']>;
    };

    type DataJsonLocationFilterInput = {
        city?: Maybe<StringQueryOperatorInput>;
        country?: Maybe<StringQueryOperatorInput>;
        lat?: Maybe<FloatQueryOperatorInput>;
        lng?: Maybe<FloatQueryOperatorInput>;
    };

    type DataJsonSortInput = {
        fields?: Maybe<Maybe<DataJsonFieldsEnum>[]>;
        order?: Maybe<Maybe<SortOrderEnum>[]>;
    };

    type DateQueryOperatorInput = {
        eq?: Maybe<Scalars['Date']>;
        ne?: Maybe<Scalars['Date']>;
        gt?: Maybe<Scalars['Date']>;
        gte?: Maybe<Scalars['Date']>;
        lt?: Maybe<Scalars['Date']>;
        lte?: Maybe<Scalars['Date']>;
        in?: Maybe<Maybe<Scalars['Date']>[]>;
        nin?: Maybe<Maybe<Scalars['Date']>[]>;
    };

    type Directory = Node & {
        __typename?: 'Directory';
        id: Scalars['ID'];
        parent?: Maybe<Node>;
        children: Node[];
        internal: Internal;
        sourceInstanceName?: Maybe<Scalars['String']>;
        absolutePath?: Maybe<Scalars['String']>;
        relativePath?: Maybe<Scalars['Date']>;
        extension?: Maybe<Scalars['String']>;
        size?: Maybe<Scalars['Int']>;
        prettySize?: Maybe<Scalars['String']>;
        modifiedTime?: Maybe<Scalars['Date']>;
        accessTime?: Maybe<Scalars['Date']>;
        changeTime?: Maybe<Scalars['Date']>;
        birthTime?: Maybe<Scalars['Date']>;
        root?: Maybe<Scalars['String']>;
        dir?: Maybe<Scalars['String']>;
        base?: Maybe<Scalars['String']>;
        ext?: Maybe<Scalars['String']>;
        name?: Maybe<Scalars['String']>;
        relativeDirectory?: Maybe<Scalars['String']>;
        dev?: Maybe<Scalars['Int']>;
        mode?: Maybe<Scalars['Int']>;
        nlink?: Maybe<Scalars['Int']>;
        uid?: Maybe<Scalars['Int']>;
        gid?: Maybe<Scalars['Int']>;
        rdev?: Maybe<Scalars['Int']>;
        blksize?: Maybe<Scalars['Int']>;
        ino?: Maybe<Scalars['Int']>;
        blocks?: Maybe<Scalars['Int']>;
        atimeMs?: Maybe<Scalars['Float']>;
        mtimeMs?: Maybe<Scalars['Float']>;
        ctimeMs?: Maybe<Scalars['Float']>;
        birthtimeMs?: Maybe<Scalars['Float']>;
        atime?: Maybe<Scalars['Date']>;
        mtime?: Maybe<Scalars['Date']>;
        ctime?: Maybe<Scalars['Date']>;
        birthtime?: Maybe<Scalars['Date']>;
    };

    type DirectoryRelativePathArgs = {
        formatString?: Maybe<Scalars['String']>;
        fromNow?: Maybe<Scalars['Boolean']>;
        difference?: Maybe<Scalars['String']>;
        locale?: Maybe<Scalars['String']>;
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

    type DirectoryBirthtimeArgs = {
        formatString?: Maybe<Scalars['String']>;
        fromNow?: Maybe<Scalars['Boolean']>;
        difference?: Maybe<Scalars['String']>;
        locale?: Maybe<Scalars['String']>;
    };

    type DirectoryConnection = {
        __typename?: 'DirectoryConnection';
        totalCount: Scalars['Int'];
        edges: DirectoryEdge[];
        nodes: Directory[];
        pageInfo: PageInfo;
        distinct: Scalars['String'][];
        group: DirectoryGroupConnection[];
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
        __typename?: 'DirectoryEdge';
        next?: Maybe<Directory>;
        node: Directory;
        previous?: Maybe<Directory>;
    };

    enum DirectoryFieldsEnum {
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
        Blksize = 'blksize',
        Ino = 'ino',
        Blocks = 'blocks',
        AtimeMs = 'atimeMs',
        MtimeMs = 'mtimeMs',
        CtimeMs = 'ctimeMs',
        BirthtimeMs = 'birthtimeMs',
        Atime = 'atime',
        Mtime = 'mtime',
        Ctime = 'ctime',
        Birthtime = 'birthtime',
    }

    type DirectoryFilterInput = {
        id?: Maybe<StringQueryOperatorInput>;
        parent?: Maybe<NodeFilterInput>;
        children?: Maybe<NodeFilterListInput>;
        internal?: Maybe<InternalFilterInput>;
        sourceInstanceName?: Maybe<StringQueryOperatorInput>;
        absolutePath?: Maybe<StringQueryOperatorInput>;
        relativePath?: Maybe<DateQueryOperatorInput>;
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
        blksize?: Maybe<IntQueryOperatorInput>;
        ino?: Maybe<IntQueryOperatorInput>;
        blocks?: Maybe<IntQueryOperatorInput>;
        atimeMs?: Maybe<FloatQueryOperatorInput>;
        mtimeMs?: Maybe<FloatQueryOperatorInput>;
        ctimeMs?: Maybe<FloatQueryOperatorInput>;
        birthtimeMs?: Maybe<FloatQueryOperatorInput>;
        atime?: Maybe<DateQueryOperatorInput>;
        mtime?: Maybe<DateQueryOperatorInput>;
        ctime?: Maybe<DateQueryOperatorInput>;
        birthtime?: Maybe<DateQueryOperatorInput>;
    };

    type DirectoryGroupConnection = {
        __typename?: 'DirectoryGroupConnection';
        totalCount: Scalars['Int'];
        edges: DirectoryEdge[];
        nodes: Directory[];
        pageInfo: PageInfo;
        field: Scalars['String'];
        fieldValue?: Maybe<Scalars['String']>;
    };

    type DirectorySortInput = {
        fields?: Maybe<Maybe<DirectoryFieldsEnum>[]>;
        order?: Maybe<Maybe<SortOrderEnum>[]>;
    };

    type DuotoneGradient = {
        highlight: Scalars['String'];
        shadow: Scalars['String'];
        opacity?: Maybe<Scalars['Int']>;
    };

    type File = Node & {
        __typename?: 'File';
        birthtime?: Maybe<Scalars['Date']>;
        birthtimeMs?: Maybe<Scalars['Float']>;
        sourceInstanceName?: Maybe<Scalars['String']>;
        absolutePath?: Maybe<Scalars['String']>;
        relativePath?: Maybe<Scalars['String']>;
        extension?: Maybe<Scalars['String']>;
        size?: Maybe<Scalars['Int']>;
        prettySize?: Maybe<Scalars['String']>;
        modifiedTime?: Maybe<Scalars['Date']>;
        accessTime?: Maybe<Scalars['Date']>;
        changeTime?: Maybe<Scalars['Date']>;
        birthTime?: Maybe<Scalars['Date']>;
        root?: Maybe<Scalars['String']>;
        dir?: Maybe<Scalars['String']>;
        base?: Maybe<Scalars['String']>;
        ext?: Maybe<Scalars['String']>;
        name?: Maybe<Scalars['String']>;
        relativeDirectory?: Maybe<Scalars['Date']>;
        dev?: Maybe<Scalars['Int']>;
        mode?: Maybe<Scalars['Int']>;
        nlink?: Maybe<Scalars['Int']>;
        uid?: Maybe<Scalars['Int']>;
        gid?: Maybe<Scalars['Int']>;
        rdev?: Maybe<Scalars['Int']>;
        blksize?: Maybe<Scalars['Int']>;
        ino?: Maybe<Scalars['Int']>;
        blocks?: Maybe<Scalars['Int']>;
        atimeMs?: Maybe<Scalars['Float']>;
        mtimeMs?: Maybe<Scalars['Float']>;
        ctimeMs?: Maybe<Scalars['Float']>;
        atime?: Maybe<Scalars['Date']>;
        mtime?: Maybe<Scalars['Date']>;
        ctime?: Maybe<Scalars['Date']>;
        /** Copy file to static directory and return public url to it */
        publicURL?: Maybe<Scalars['String']>;
        id: Scalars['ID'];
        parent?: Maybe<Node>;
        children: Node[];
        internal: Internal;
        childDataJson?: Maybe<DataJson>;
        childMarkdownRemark?: Maybe<MarkdownRemark>;
        childImageSharp?: Maybe<ImageSharp>;
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

    type FileRelativeDirectoryArgs = {
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
        __typename?: 'FileConnection';
        totalCount: Scalars['Int'];
        edges: FileEdge[];
        nodes: File[];
        pageInfo: PageInfo;
        distinct: Scalars['String'][];
        group: FileGroupConnection[];
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
        __typename?: 'FileEdge';
        next?: Maybe<File>;
        node: File;
        previous?: Maybe<File>;
    };

    enum FileFieldsEnum {
        Birthtime = 'birthtime',
        BirthtimeMs = 'birthtimeMs',
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
        Blksize = 'blksize',
        Ino = 'ino',
        Blocks = 'blocks',
        AtimeMs = 'atimeMs',
        MtimeMs = 'mtimeMs',
        CtimeMs = 'ctimeMs',
        Atime = 'atime',
        Mtime = 'mtime',
        Ctime = 'ctime',
        PublicUrl = 'publicURL',
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
        ChildMarkdownRemarkId = 'childMarkdownRemark___id',
        ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
        ChildMarkdownRemarkFrontmatterDate = 'childMarkdownRemark___frontmatter___date',
        ChildMarkdownRemarkFrontmatterKeywords = 'childMarkdownRemark___frontmatter___keywords',
        ChildMarkdownRemarkFrontmatterSlug = 'childMarkdownRemark___frontmatter___slug',
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
        ChildImageSharpId = 'childImageSharp___id',
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
    }

    type FileFilterInput = {
        birthtime?: Maybe<DateQueryOperatorInput>;
        birthtimeMs?: Maybe<FloatQueryOperatorInput>;
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
        relativeDirectory?: Maybe<DateQueryOperatorInput>;
        dev?: Maybe<IntQueryOperatorInput>;
        mode?: Maybe<IntQueryOperatorInput>;
        nlink?: Maybe<IntQueryOperatorInput>;
        uid?: Maybe<IntQueryOperatorInput>;
        gid?: Maybe<IntQueryOperatorInput>;
        rdev?: Maybe<IntQueryOperatorInput>;
        blksize?: Maybe<IntQueryOperatorInput>;
        ino?: Maybe<IntQueryOperatorInput>;
        blocks?: Maybe<IntQueryOperatorInput>;
        atimeMs?: Maybe<FloatQueryOperatorInput>;
        mtimeMs?: Maybe<FloatQueryOperatorInput>;
        ctimeMs?: Maybe<FloatQueryOperatorInput>;
        atime?: Maybe<DateQueryOperatorInput>;
        mtime?: Maybe<DateQueryOperatorInput>;
        ctime?: Maybe<DateQueryOperatorInput>;
        publicURL?: Maybe<StringQueryOperatorInput>;
        id?: Maybe<StringQueryOperatorInput>;
        parent?: Maybe<NodeFilterInput>;
        children?: Maybe<NodeFilterListInput>;
        internal?: Maybe<InternalFilterInput>;
        childDataJson?: Maybe<DataJsonFilterInput>;
        childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
        childImageSharp?: Maybe<ImageSharpFilterInput>;
    };

    type FileGroupConnection = {
        __typename?: 'FileGroupConnection';
        totalCount: Scalars['Int'];
        edges: FileEdge[];
        nodes: File[];
        pageInfo: PageInfo;
        field: Scalars['String'];
        fieldValue?: Maybe<Scalars['String']>;
    };

    type FileSortInput = {
        fields?: Maybe<Maybe<FileFieldsEnum>[]>;
        order?: Maybe<Maybe<SortOrderEnum>[]>;
    };

    type FloatQueryOperatorInput = {
        eq?: Maybe<Scalars['Float']>;
        ne?: Maybe<Scalars['Float']>;
        gt?: Maybe<Scalars['Float']>;
        gte?: Maybe<Scalars['Float']>;
        lt?: Maybe<Scalars['Float']>;
        lte?: Maybe<Scalars['Float']>;
        in?: Maybe<Maybe<Scalars['Float']>[]>;
        nin?: Maybe<Maybe<Scalars['Float']>[]>;
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
        __typename?: 'ImageSharp';
        id: Scalars['ID'];
        fixed?: Maybe<ImageSharpFixed>;
        resolutions?: Maybe<ImageSharpResolutions>;
        fluid?: Maybe<ImageSharpFluid>;
        sizes?: Maybe<ImageSharpSizes>;
        original?: Maybe<ImageSharpOriginal>;
        resize?: Maybe<ImageSharpResize>;
        parent?: Maybe<Node>;
        children: Node[];
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
        toFormat?: Maybe<ImageFormat>;
        toFormatBase64?: Maybe<ImageFormat>;
        cropFocus?: Maybe<ImageCropFocus>;
        fit?: Maybe<ImageFit>;
        background?: Maybe<Scalars['String']>;
        rotate?: Maybe<Scalars['Int']>;
        trim?: Maybe<Scalars['Float']>;
        sizes?: Maybe<Scalars['String']>;
        srcSetBreakpoints?: Maybe<Maybe<Scalars['Int']>[]>;
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
        toFormat?: Maybe<ImageFormat>;
        toFormatBase64?: Maybe<ImageFormat>;
        cropFocus?: Maybe<ImageCropFocus>;
        fit?: Maybe<ImageFit>;
        background?: Maybe<Scalars['String']>;
        rotate?: Maybe<Scalars['Int']>;
        trim?: Maybe<Scalars['Float']>;
        sizes?: Maybe<Scalars['String']>;
        srcSetBreakpoints?: Maybe<Maybe<Scalars['Int']>[]>;
    };

    type ImageSharpResizeArgs = {
        width?: Maybe<Scalars['Int']>;
        height?: Maybe<Scalars['Int']>;
        quality?: Maybe<Scalars['Int']>;
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
        __typename?: 'ImageSharpConnection';
        totalCount: Scalars['Int'];
        edges: ImageSharpEdge[];
        nodes: ImageSharp[];
        pageInfo: PageInfo;
        distinct: Scalars['String'][];
        group: ImageSharpGroupConnection[];
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
        __typename?: 'ImageSharpEdge';
        next?: Maybe<ImageSharp>;
        node: ImageSharp;
        previous?: Maybe<ImageSharp>;
    };

    enum ImageSharpFieldsEnum {
        Id = 'id',
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
        id?: Maybe<StringQueryOperatorInput>;
        fixed?: Maybe<ImageSharpFixedFilterInput>;
        resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
        fluid?: Maybe<ImageSharpFluidFilterInput>;
        sizes?: Maybe<ImageSharpSizesFilterInput>;
        original?: Maybe<ImageSharpOriginalFilterInput>;
        resize?: Maybe<ImageSharpResizeFilterInput>;
        parent?: Maybe<NodeFilterInput>;
        children?: Maybe<NodeFilterListInput>;
        internal?: Maybe<InternalFilterInput>;
    };

    type ImageSharpFixed = {
        __typename?: 'ImageSharpFixed';
        base64?: Maybe<Scalars['String']>;
        tracedSVG?: Maybe<Scalars['String']>;
        aspectRatio?: Maybe<Scalars['Float']>;
        width?: Maybe<Scalars['Float']>;
        height?: Maybe<Scalars['Float']>;
        src?: Maybe<Scalars['String']>;
        srcSet?: Maybe<Scalars['String']>;
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
        __typename?: 'ImageSharpFluid';
        base64?: Maybe<Scalars['String']>;
        tracedSVG?: Maybe<Scalars['String']>;
        aspectRatio?: Maybe<Scalars['Float']>;
        src?: Maybe<Scalars['String']>;
        srcSet?: Maybe<Scalars['String']>;
        srcWebp?: Maybe<Scalars['String']>;
        srcSetWebp?: Maybe<Scalars['String']>;
        sizes?: Maybe<Scalars['String']>;
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
        __typename?: 'ImageSharpGroupConnection';
        totalCount: Scalars['Int'];
        edges: ImageSharpEdge[];
        nodes: ImageSharp[];
        pageInfo: PageInfo;
        field: Scalars['String'];
        fieldValue?: Maybe<Scalars['String']>;
    };

    type ImageSharpOriginal = {
        __typename?: 'ImageSharpOriginal';
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
        __typename?: 'ImageSharpResize';
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
        __typename?: 'ImageSharpResolutions';
        base64?: Maybe<Scalars['String']>;
        tracedSVG?: Maybe<Scalars['String']>;
        aspectRatio?: Maybe<Scalars['Float']>;
        width?: Maybe<Scalars['Float']>;
        height?: Maybe<Scalars['Float']>;
        src?: Maybe<Scalars['String']>;
        srcSet?: Maybe<Scalars['String']>;
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
        __typename?: 'ImageSharpSizes';
        base64?: Maybe<Scalars['String']>;
        tracedSVG?: Maybe<Scalars['String']>;
        aspectRatio?: Maybe<Scalars['Float']>;
        src?: Maybe<Scalars['String']>;
        srcSet?: Maybe<Scalars['String']>;
        srcWebp?: Maybe<Scalars['String']>;
        srcSetWebp?: Maybe<Scalars['String']>;
        sizes?: Maybe<Scalars['String']>;
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
        fields?: Maybe<Maybe<ImageSharpFieldsEnum>[]>;
        order?: Maybe<Maybe<SortOrderEnum>[]>;
    };

    type Internal = {
        __typename?: 'Internal';
        content?: Maybe<Scalars['String']>;
        contentDigest: Scalars['String'];
        description?: Maybe<Scalars['String']>;
        fieldOwners?: Maybe<Maybe<Scalars['String']>[]>;
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
        in?: Maybe<Maybe<Scalars['Int']>[]>;
        nin?: Maybe<Maybe<Scalars['Int']>[]>;
    };

    type JsonQueryOperatorInput = {
        eq?: Maybe<Scalars['JSON']>;
        ne?: Maybe<Scalars['JSON']>;
        in?: Maybe<Maybe<Scalars['JSON']>[]>;
        nin?: Maybe<Maybe<Scalars['JSON']>[]>;
        regex?: Maybe<Scalars['JSON']>;
        glob?: Maybe<Scalars['JSON']>;
    };

    enum MarkdownExcerptFormats {
        Plain = 'PLAIN',
        Html = 'HTML',
        Markdown = 'MARKDOWN',
    }

    type MarkdownHeading = {
        __typename?: 'MarkdownHeading';
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
        __typename?: 'MarkdownRemark';
        id: Scalars['ID'];
        frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
        excerpt?: Maybe<Scalars['String']>;
        rawMarkdownBody?: Maybe<Scalars['String']>;
        fileAbsolutePath?: Maybe<Scalars['String']>;
        html?: Maybe<Scalars['String']>;
        htmlAst?: Maybe<Scalars['JSON']>;
        excerptAst?: Maybe<Scalars['JSON']>;
        headings?: Maybe<Maybe<MarkdownHeading>[]>;
        timeToRead?: Maybe<Scalars['Int']>;
        tableOfContents?: Maybe<Scalars['String']>;
        wordCount?: Maybe<MarkdownWordCount>;
        parent?: Maybe<Node>;
        children: Node[];
        internal: Internal;
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
        pathToSlugField?: Maybe<Scalars['String']>;
        maxDepth?: Maybe<Scalars['Int']>;
        heading?: Maybe<Scalars['String']>;
    };

    type MarkdownRemarkConnection = {
        __typename?: 'MarkdownRemarkConnection';
        totalCount: Scalars['Int'];
        edges: MarkdownRemarkEdge[];
        nodes: MarkdownRemark[];
        pageInfo: PageInfo;
        distinct: Scalars['String'][];
        group: MarkdownRemarkGroupConnection[];
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
        __typename?: 'MarkdownRemarkEdge';
        next?: Maybe<MarkdownRemark>;
        node: MarkdownRemark;
        previous?: Maybe<MarkdownRemark>;
    };

    enum MarkdownRemarkFieldsEnum {
        Id = 'id',
        FrontmatterTitle = 'frontmatter___title',
        FrontmatterDate = 'frontmatter___date',
        FrontmatterKeywords = 'frontmatter___keywords',
        FrontmatterSlug = 'frontmatter___slug',
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
    }

    type MarkdownRemarkFilterInput = {
        id?: Maybe<StringQueryOperatorInput>;
        frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
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

    type MarkdownRemarkFrontmatter = {
        __typename?: 'MarkdownRemarkFrontmatter';
        title?: Maybe<Scalars['String']>;
        date?: Maybe<Scalars['Date']>;
        keywords?: Maybe<Scalars['String']>;
        slug?: Maybe<Scalars['String']>;
    };

    type MarkdownRemarkFrontmatterDateArgs = {
        formatString?: Maybe<Scalars['String']>;
        fromNow?: Maybe<Scalars['Boolean']>;
        difference?: Maybe<Scalars['String']>;
        locale?: Maybe<Scalars['String']>;
    };

    type MarkdownRemarkFrontmatterFilterInput = {
        title?: Maybe<StringQueryOperatorInput>;
        date?: Maybe<DateQueryOperatorInput>;
        keywords?: Maybe<StringQueryOperatorInput>;
        slug?: Maybe<StringQueryOperatorInput>;
    };

    type MarkdownRemarkGroupConnection = {
        __typename?: 'MarkdownRemarkGroupConnection';
        totalCount: Scalars['Int'];
        edges: MarkdownRemarkEdge[];
        nodes: MarkdownRemark[];
        pageInfo: PageInfo;
        field: Scalars['String'];
        fieldValue?: Maybe<Scalars['String']>;
    };

    type MarkdownRemarkSortInput = {
        fields?: Maybe<Maybe<MarkdownRemarkFieldsEnum>[]>;
        order?: Maybe<Maybe<SortOrderEnum>[]>;
    };

    type MarkdownWordCount = {
        __typename?: 'MarkdownWordCount';
        paragraphs?: Maybe<Scalars['Int']>;
        sentences?: Maybe<Scalars['Int']>;
        words?: Maybe<Scalars['Int']>;
    };

    type MarkdownWordCountFilterInput = {
        paragraphs?: Maybe<IntQueryOperatorInput>;
        sentences?: Maybe<IntQueryOperatorInput>;
        words?: Maybe<IntQueryOperatorInput>;
    };

    /** Node Interface */
    type Node = {
        id: Scalars['ID'];
        parent?: Maybe<Node>;
        children: Node[];
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
        __typename?: 'PageInfo';
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
        __typename?: 'Query';
        imageSharp?: Maybe<ImageSharp>;
        allImageSharp: ImageSharpConnection;
        file?: Maybe<File>;
        allFile: FileConnection;
        markdownRemark?: Maybe<MarkdownRemark>;
        allMarkdownRemark: MarkdownRemarkConnection;
        sitePage?: Maybe<SitePage>;
        allSitePage: SitePageConnection;
        sitePlugin?: Maybe<SitePlugin>;
        allSitePlugin: SitePluginConnection;
        site?: Maybe<Site>;
        allSite: SiteConnection;
        directory?: Maybe<Directory>;
        allDirectory: DirectoryConnection;
        dataJson?: Maybe<DataJson>;
        allDataJson: DataJsonConnection;
    };

    type QueryImageSharpArgs = {
        id?: Maybe<StringQueryOperatorInput>;
        fixed?: Maybe<ImageSharpFixedFilterInput>;
        resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
        fluid?: Maybe<ImageSharpFluidFilterInput>;
        sizes?: Maybe<ImageSharpSizesFilterInput>;
        original?: Maybe<ImageSharpOriginalFilterInput>;
        resize?: Maybe<ImageSharpResizeFilterInput>;
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

    type QueryFileArgs = {
        birthtime?: Maybe<DateQueryOperatorInput>;
        birthtimeMs?: Maybe<FloatQueryOperatorInput>;
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
        relativeDirectory?: Maybe<DateQueryOperatorInput>;
        dev?: Maybe<IntQueryOperatorInput>;
        mode?: Maybe<IntQueryOperatorInput>;
        nlink?: Maybe<IntQueryOperatorInput>;
        uid?: Maybe<IntQueryOperatorInput>;
        gid?: Maybe<IntQueryOperatorInput>;
        rdev?: Maybe<IntQueryOperatorInput>;
        blksize?: Maybe<IntQueryOperatorInput>;
        ino?: Maybe<IntQueryOperatorInput>;
        blocks?: Maybe<IntQueryOperatorInput>;
        atimeMs?: Maybe<FloatQueryOperatorInput>;
        mtimeMs?: Maybe<FloatQueryOperatorInput>;
        ctimeMs?: Maybe<FloatQueryOperatorInput>;
        atime?: Maybe<DateQueryOperatorInput>;
        mtime?: Maybe<DateQueryOperatorInput>;
        ctime?: Maybe<DateQueryOperatorInput>;
        publicURL?: Maybe<StringQueryOperatorInput>;
        id?: Maybe<StringQueryOperatorInput>;
        parent?: Maybe<NodeFilterInput>;
        children?: Maybe<NodeFilterListInput>;
        internal?: Maybe<InternalFilterInput>;
        childDataJson?: Maybe<DataJsonFilterInput>;
        childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
        childImageSharp?: Maybe<ImageSharpFilterInput>;
    };

    type QueryAllFileArgs = {
        filter?: Maybe<FileFilterInput>;
        sort?: Maybe<FileSortInput>;
        skip?: Maybe<Scalars['Int']>;
        limit?: Maybe<Scalars['Int']>;
    };

    type QueryMarkdownRemarkArgs = {
        id?: Maybe<StringQueryOperatorInput>;
        frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
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

    type QueryAllMarkdownRemarkArgs = {
        filter?: Maybe<MarkdownRemarkFilterInput>;
        sort?: Maybe<MarkdownRemarkSortInput>;
        skip?: Maybe<Scalars['Int']>;
        limit?: Maybe<Scalars['Int']>;
    };

    type QuerySitePageArgs = {
        id?: Maybe<StringQueryOperatorInput>;
        parent?: Maybe<NodeFilterInput>;
        children?: Maybe<NodeFilterListInput>;
        internal?: Maybe<InternalFilterInput>;
        path?: Maybe<StringQueryOperatorInput>;
        internalComponentName?: Maybe<StringQueryOperatorInput>;
        component?: Maybe<StringQueryOperatorInput>;
        componentChunkName?: Maybe<StringQueryOperatorInput>;
        isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
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

    type QueryDirectoryArgs = {
        id?: Maybe<StringQueryOperatorInput>;
        parent?: Maybe<NodeFilterInput>;
        children?: Maybe<NodeFilterListInput>;
        internal?: Maybe<InternalFilterInput>;
        sourceInstanceName?: Maybe<StringQueryOperatorInput>;
        absolutePath?: Maybe<StringQueryOperatorInput>;
        relativePath?: Maybe<DateQueryOperatorInput>;
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
        blksize?: Maybe<IntQueryOperatorInput>;
        ino?: Maybe<IntQueryOperatorInput>;
        blocks?: Maybe<IntQueryOperatorInput>;
        atimeMs?: Maybe<FloatQueryOperatorInput>;
        mtimeMs?: Maybe<FloatQueryOperatorInput>;
        ctimeMs?: Maybe<FloatQueryOperatorInput>;
        birthtimeMs?: Maybe<FloatQueryOperatorInput>;
        atime?: Maybe<DateQueryOperatorInput>;
        mtime?: Maybe<DateQueryOperatorInput>;
        ctime?: Maybe<DateQueryOperatorInput>;
        birthtime?: Maybe<DateQueryOperatorInput>;
    };

    type QueryAllDirectoryArgs = {
        filter?: Maybe<DirectoryFilterInput>;
        sort?: Maybe<DirectorySortInput>;
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
    };

    type QueryAllDataJsonArgs = {
        filter?: Maybe<DataJsonFilterInput>;
        sort?: Maybe<DataJsonSortInput>;
        skip?: Maybe<Scalars['Int']>;
        limit?: Maybe<Scalars['Int']>;
    };

    type Site = Node & {
        __typename?: 'Site';
        id: Scalars['ID'];
        parent?: Maybe<Node>;
        children: Node[];
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
        __typename?: 'SiteConnection';
        totalCount: Scalars['Int'];
        edges: SiteEdge[];
        nodes: Site[];
        pageInfo: PageInfo;
        distinct: Scalars['String'][];
        group: SiteGroupConnection[];
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
        __typename?: 'SiteEdge';
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
        SiteMetadataAuthor = 'siteMetadata___author',
        SiteMetadataDescription = 'siteMetadata___description',
        SiteMetadataTitle = 'siteMetadata___title',
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
        __typename?: 'SiteGroupConnection';
        totalCount: Scalars['Int'];
        edges: SiteEdge[];
        nodes: Site[];
        pageInfo: PageInfo;
        field: Scalars['String'];
        fieldValue?: Maybe<Scalars['String']>;
    };

    type SitePage = Node & {
        __typename?: 'SitePage';
        id: Scalars['ID'];
        parent?: Maybe<Node>;
        children: Node[];
        internal: Internal;
        path?: Maybe<Scalars['String']>;
        internalComponentName?: Maybe<Scalars['String']>;
        component?: Maybe<Scalars['String']>;
        componentChunkName?: Maybe<Scalars['String']>;
        isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
        pluginCreator?: Maybe<SitePlugin>;
        pluginCreatorId?: Maybe<Scalars['String']>;
        componentPath?: Maybe<Scalars['String']>;
    };

    type SitePageConnection = {
        __typename?: 'SitePageConnection';
        totalCount: Scalars['Int'];
        edges: SitePageEdge[];
        nodes: SitePage[];
        pageInfo: PageInfo;
        distinct: Scalars['String'][];
        group: SitePageGroupConnection[];
    };

    type SitePageConnectionDistinctArgs = {
        field: SitePageFieldsEnum;
    };

    type SitePageConnectionGroupArgs = {
        skip?: Maybe<Scalars['Int']>;
        limit?: Maybe<Scalars['Int']>;
        field: SitePageFieldsEnum;
    };

    type SitePageEdge = {
        __typename?: 'SitePageEdge';
        next?: Maybe<SitePage>;
        node: SitePage;
        previous?: Maybe<SitePage>;
    };

    enum SitePageFieldsEnum {
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
        Path = 'path',
        InternalComponentName = 'internalComponentName',
        Component = 'component',
        ComponentChunkName = 'componentChunkName',
        IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
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
        PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
        PluginCreatorPluginOptionsFonts = 'pluginCreator___pluginOptions___fonts',
        PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
        PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
        PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
        PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
        PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
        PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
        PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
        PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
        PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
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
        id?: Maybe<StringQueryOperatorInput>;
        parent?: Maybe<NodeFilterInput>;
        children?: Maybe<NodeFilterListInput>;
        internal?: Maybe<InternalFilterInput>;
        path?: Maybe<StringQueryOperatorInput>;
        internalComponentName?: Maybe<StringQueryOperatorInput>;
        component?: Maybe<StringQueryOperatorInput>;
        componentChunkName?: Maybe<StringQueryOperatorInput>;
        isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
        pluginCreator?: Maybe<SitePluginFilterInput>;
        pluginCreatorId?: Maybe<StringQueryOperatorInput>;
        componentPath?: Maybe<StringQueryOperatorInput>;
    };

    type SitePageGroupConnection = {
        __typename?: 'SitePageGroupConnection';
        totalCount: Scalars['Int'];
        edges: SitePageEdge[];
        nodes: SitePage[];
        pageInfo: PageInfo;
        field: Scalars['String'];
        fieldValue?: Maybe<Scalars['String']>;
    };

    type SitePageSortInput = {
        fields?: Maybe<Maybe<SitePageFieldsEnum>[]>;
        order?: Maybe<Maybe<SortOrderEnum>[]>;
    };

    type SitePlugin = Node & {
        __typename?: 'SitePlugin';
        id: Scalars['ID'];
        parent?: Maybe<Node>;
        children: Node[];
        internal: Internal;
        resolve?: Maybe<Scalars['String']>;
        name?: Maybe<Scalars['String']>;
        version?: Maybe<Scalars['String']>;
        pluginOptions?: Maybe<SitePluginPluginOptions>;
        nodeAPIs?: Maybe<Maybe<Scalars['String']>[]>;
        ssrAPIs?: Maybe<Maybe<Scalars['String']>[]>;
        pluginFilepath?: Maybe<Scalars['String']>;
        packageJson?: Maybe<SitePluginPackageJson>;
    };

    type SitePluginConnection = {
        __typename?: 'SitePluginConnection';
        totalCount: Scalars['Int'];
        edges: SitePluginEdge[];
        nodes: SitePlugin[];
        pageInfo: PageInfo;
        distinct: Scalars['String'][];
        group: SitePluginGroupConnection[];
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
        __typename?: 'SitePluginEdge';
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
        PluginOptionsDisplay = 'pluginOptions___display',
        PluginOptionsFonts = 'pluginOptions___fonts',
        PluginOptionsBackgroundColor = 'pluginOptions___background_color',
        PluginOptionsIcon = 'pluginOptions___icon',
        PluginOptionsName = 'pluginOptions___name',
        PluginOptionsShortName = 'pluginOptions___short_name',
        PluginOptionsStartUrl = 'pluginOptions___start_url',
        PluginOptionsThemeColor = 'pluginOptions___theme_color',
        PluginOptionsPath = 'pluginOptions___path',
        PluginOptionsPathCheck = 'pluginOptions___pathCheck',
        NodeApIs = 'nodeAPIs',
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
        ssrAPIs?: Maybe<StringQueryOperatorInput>;
        pluginFilepath?: Maybe<StringQueryOperatorInput>;
        packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
    };

    type SitePluginGroupConnection = {
        __typename?: 'SitePluginGroupConnection';
        totalCount: Scalars['Int'];
        edges: SitePluginEdge[];
        nodes: SitePlugin[];
        pageInfo: PageInfo;
        field: Scalars['String'];
        fieldValue?: Maybe<Scalars['String']>;
    };

    type SitePluginPackageJson = {
        __typename?: 'SitePluginPackageJson';
        name?: Maybe<Scalars['String']>;
        description?: Maybe<Scalars['String']>;
        version?: Maybe<Scalars['String']>;
        main?: Maybe<Scalars['String']>;
        license?: Maybe<Scalars['String']>;
        dependencies?: Maybe<Maybe<SitePluginPackageJsonDependencies>[]>;
        devDependencies?: Maybe<Maybe<SitePluginPackageJsonDevDependencies>[]>;
        peerDependencies?: Maybe<Maybe<SitePluginPackageJsonPeerDependencies>[]>;
        keywords?: Maybe<Maybe<Scalars['String']>[]>;
    };

    type SitePluginPackageJsonDependencies = {
        __typename?: 'SitePluginPackageJsonDependencies';
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
        __typename?: 'SitePluginPackageJsonDevDependencies';
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
        __typename?: 'SitePluginPackageJsonPeerDependencies';
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
        __typename?: 'SitePluginPluginOptions';
        display?: Maybe<Scalars['String']>;
        fonts?: Maybe<Maybe<Scalars['String']>[]>;
        background_color?: Maybe<Scalars['String']>;
        icon?: Maybe<Scalars['String']>;
        name?: Maybe<Scalars['String']>;
        short_name?: Maybe<Scalars['String']>;
        start_url?: Maybe<Scalars['String']>;
        theme_color?: Maybe<Scalars['String']>;
        path?: Maybe<Scalars['String']>;
        pathCheck?: Maybe<Scalars['Boolean']>;
    };

    type SitePluginPluginOptionsFilterInput = {
        display?: Maybe<StringQueryOperatorInput>;
        fonts?: Maybe<StringQueryOperatorInput>;
        background_color?: Maybe<StringQueryOperatorInput>;
        icon?: Maybe<StringQueryOperatorInput>;
        name?: Maybe<StringQueryOperatorInput>;
        short_name?: Maybe<StringQueryOperatorInput>;
        start_url?: Maybe<StringQueryOperatorInput>;
        theme_color?: Maybe<StringQueryOperatorInput>;
        path?: Maybe<StringQueryOperatorInput>;
        pathCheck?: Maybe<BooleanQueryOperatorInput>;
    };

    type SitePluginSortInput = {
        fields?: Maybe<Maybe<SitePluginFieldsEnum>[]>;
        order?: Maybe<Maybe<SortOrderEnum>[]>;
    };

    type SiteSiteMetadata = {
        __typename?: 'SiteSiteMetadata';
        author?: Maybe<Scalars['String']>;
        description?: Maybe<Scalars['String']>;
        title?: Maybe<Scalars['String']>;
    };

    type SiteSiteMetadataFilterInput = {
        author?: Maybe<StringQueryOperatorInput>;
        description?: Maybe<StringQueryOperatorInput>;
        title?: Maybe<StringQueryOperatorInput>;
    };

    type SiteSortInput = {
        fields?: Maybe<Maybe<SiteFieldsEnum>[]>;
        order?: Maybe<Maybe<SortOrderEnum>[]>;
    };

    enum SortOrderEnum {
        Asc = 'ASC',
        Desc = 'DESC',
    }

    type StringQueryOperatorInput = {
        eq?: Maybe<Scalars['String']>;
        ne?: Maybe<Scalars['String']>;
        in?: Maybe<Maybe<Scalars['String']>[]>;
        nin?: Maybe<Maybe<Scalars['String']>[]>;
        regex?: Maybe<Scalars['String']>;
        glob?: Maybe<Scalars['String']>;
    };
    type GatsbyImageSharpFixedFragment = { __typename?: 'ImageSharpFixed' } & Pick<
        ImageSharpFixed,
        'base64' | 'width' | 'height' | 'src' | 'srcSet'
    >;

    type GatsbyImageSharpFixed_TracedSvgFragment = { __typename?: 'ImageSharpFixed' } & Pick<
        ImageSharpFixed,
        'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
    >;

    type GatsbyImageSharpFixed_WithWebpFragment = { __typename?: 'ImageSharpFixed' } & Pick<
        ImageSharpFixed,
        'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
    >;

    type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFixed' } & Pick<
        ImageSharpFixed,
        'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
    >;

    type GatsbyImageSharpFixed_NoBase64Fragment = { __typename?: 'ImageSharpFixed' } & Pick<
        ImageSharpFixed,
        'width' | 'height' | 'src' | 'srcSet'
    >;

    type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFixed' } & Pick<
        ImageSharpFixed,
        'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
    >;

    type GatsbyImageSharpFluidFragment = { __typename?: 'ImageSharpFluid' } & Pick<
        ImageSharpFluid,
        'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
    >;

    type GatsbyImageSharpFluid_TracedSvgFragment = { __typename?: 'ImageSharpFluid' } & Pick<
        ImageSharpFluid,
        'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
    >;

    type GatsbyImageSharpFluid_WithWebpFragment = { __typename?: 'ImageSharpFluid' } & Pick<
        ImageSharpFluid,
        'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
    >;

    type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpFluid' } & Pick<
        ImageSharpFluid,
        'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
    >;

    type GatsbyImageSharpFluid_NoBase64Fragment = { __typename?: 'ImageSharpFluid' } & Pick<
        ImageSharpFluid,
        'aspectRatio' | 'src' | 'srcSet' | 'sizes'
    >;

    type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpFluid' } & Pick<
        ImageSharpFluid,
        'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
    >;

    type GatsbyImageSharpResolutionsFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
        ImageSharpResolutions,
        'base64' | 'width' | 'height' | 'src' | 'srcSet'
    >;

    type GatsbyImageSharpResolutions_TracedSvgFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
        ImageSharpResolutions,
        'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
    >;

    type GatsbyImageSharpResolutions_WithWebpFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
        ImageSharpResolutions,
        'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
    >;

    type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpResolutions' } & Pick<
        ImageSharpResolutions,
        'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
    >;

    type GatsbyImageSharpResolutions_NoBase64Fragment = { __typename?: 'ImageSharpResolutions' } & Pick<
        ImageSharpResolutions,
        'width' | 'height' | 'src' | 'srcSet'
    >;

    type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpResolutions' } & Pick<
        ImageSharpResolutions,
        'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
    >;

    type GatsbyImageSharpSizesFragment = { __typename?: 'ImageSharpSizes' } & Pick<
        ImageSharpSizes,
        'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
    >;

    type GatsbyImageSharpSizes_TracedSvgFragment = { __typename?: 'ImageSharpSizes' } & Pick<
        ImageSharpSizes,
        'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
    >;

    type GatsbyImageSharpSizes_WithWebpFragment = { __typename?: 'ImageSharpSizes' } & Pick<
        ImageSharpSizes,
        'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
    >;

    type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = { __typename?: 'ImageSharpSizes' } & Pick<
        ImageSharpSizes,
        'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
    >;

    type GatsbyImageSharpSizes_NoBase64Fragment = { __typename?: 'ImageSharpSizes' } & Pick<
        ImageSharpSizes,
        'aspectRatio' | 'src' | 'srcSet' | 'sizes'
    >;

    type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = { __typename?: 'ImageSharpSizes' } & Pick<
        ImageSharpSizes,
        'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
    >;

    type HeaderDataQueryQueryVariables = {};

    type HeaderDataQueryQuery = { __typename?: 'Query' } & {
        dataJson: Maybe<{ __typename?: 'DataJson' } & Pick<DataJson, 'jobTitle'>>;
        file: Maybe<
            { __typename?: 'File' } & {
                childImageSharp: Maybe<
                    { __typename?: 'ImageSharp' } & {
                        fixed: Maybe<{ __typename?: 'ImageSharpFixed' } & GatsbyImageSharpFixedFragment>;
                    }
                >;
            }
        >;
    };

    type LocationMapDataQueryQueryVariables = {};

    type LocationMapDataQueryQuery = { __typename?: 'Query' } & {
        dataJson: Maybe<
            { __typename?: 'DataJson' } & {
                location: Maybe<
                    { __typename?: 'DataJsonLocation' } & Pick<DataJsonLocation, 'country' | 'city' | 'lat' | 'lng'>
                >;
            }
        >;
    };

    type SeoQueryQueryVariables = {};

    type SeoQueryQuery = { __typename?: 'Query' } & {
        site: Maybe<
            { __typename?: 'Site' } & {
                siteMetadata: Maybe<
                    { __typename?: 'SiteSiteMetadata' } & Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>
                >;
            }
        >;
    };

    type AboutMePageDataQueryQueryVariables = {};

    type AboutMePageDataQueryQuery = { __typename?: 'Query' } & {
        dataJson: Maybe<
            { __typename?: 'DataJson' } & Pick<DataJson, 'jobTitle'> & {
                    company: Maybe<{ __typename?: 'DataJsonCompany' } & Pick<DataJsonCompany, 'name' | 'website'>>;
                    location: Maybe<{ __typename?: 'DataJsonLocation' } & Pick<DataJsonLocation, 'city'>>;
                    contacts: Maybe<
                        Maybe<{ __typename?: 'DataJsonContacts' } & Pick<DataJsonContacts, 'img' | 'label' | 'url'>>[]
                    >;
                }
        >;
        allFile: { __typename?: 'FileConnection' } & {
            nodes: ({ __typename?: 'File' } & Pick<File, 'base'> & {
                    childImageSharp: Maybe<
                        { __typename?: 'ImageSharp' } & {
                            fixed: Maybe<{ __typename?: 'ImageSharpFixed' } & GatsbyImageSharpFixedFragment>;
                        }
                    >;
                })[];
        };
        file: Maybe<
            { __typename?: 'File' } & Pick<File, 'id'> & {
                    childImageSharp: Maybe<
                        { __typename?: 'ImageSharp' } & {
                            fluid: Maybe<{ __typename?: 'ImageSharpFluid' } & GatsbyImageSharpFluidFragment>;
                        }
                    >;
                }
        >;
    };

    type ArticlesQueryQueryVariables = {};

    type ArticlesQueryQuery = { __typename?: 'Query' } & {
        allMarkdownRemark: { __typename?: 'MarkdownRemarkConnection' } & {
            nodes: ({ __typename?: 'MarkdownRemark' } & {
                frontmatter: Maybe<
                    { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
                        MarkdownRemarkFrontmatter,
                        'date' | 'slug' | 'title'
                    >
                >;
            })[];
        };
    };

    type ArticleQueryQueryVariables = {
        path: Scalars['String'];
    };

    type ArticleQueryQuery = { __typename?: 'Query' } & {
        markdownRemark: Maybe<
            { __typename?: 'MarkdownRemark' } & Pick<MarkdownRemark, 'html'> & {
                    frontmatter: Maybe<
                        { __typename?: 'MarkdownRemarkFrontmatter' } & Pick<
                            MarkdownRemarkFrontmatter,
                            'date' | 'keywords' | 'title'
                        >
                    >;
                }
        >;
    };
}
