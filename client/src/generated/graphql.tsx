import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String'];
  user: User;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['String'];
  name: Scalars['String'];
  posts: Array<Post>;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  id: Scalars['String'];
  post?: Maybe<Post>;
  user: User;
  userId: Scalars['String'];
};

export type CreatePinInput = {
  about: Scalars['String'];
  category: Scalars['String'];
  destination: Scalars['String'];
  image: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment: Comment;
  createPin: Post;
  googleLogin: AuthPayload;
  logout: User;
  refreshAuth: AuthPayload;
  savePost: SavePayload;
};


export type MutationAddCommentArgs = {
  content: Scalars['String'];
  postId: Scalars['String'];
};


export type MutationCreatePinArgs = {
  input: CreatePinInput;
};


export type MutationGoogleLoginArgs = {
  tokenId: Scalars['String'];
};


export type MutationSavePostArgs = {
  postId: Scalars['String'];
  userId: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  about: Scalars['String'];
  category: Category;
  comments: Array<Comment>;
  destination: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  save?: Maybe<Array<Save>>;
  title: Scalars['String'];
  user?: Maybe<User>;
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  feed: Array<Post>;
  getPin: Post;
  getUser?: Maybe<User>;
  me: User;
  more: Array<Post>;
  search: Array<Post>;
};


export type QueryGetPinArgs = {
  postId: Scalars['String'];
};


export type QueryGetUserArgs = {
  userId: Scalars['String'];
};


export type QueryMoreArgs = {
  category: Scalars['String'];
  postId: Scalars['String'];
};


export type QuerySearchArgs = {
  searchTerm: Scalars['String'];
};

export type Save = {
  __typename?: 'Save';
  id: Scalars['String'];
  post: Post;
  postId: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type SavePayload = {
  __typename?: 'SavePayload';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  comments: Array<Comment>;
  email: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  posts: Array<Post>;
  save?: Maybe<Array<Save>>;
};

export type AddCommentMutationVariables = Exact<{
  postId: Scalars['String'];
  content: Scalars['String'];
}>;


export type AddCommentMutation = { __typename?: 'Mutation', addComment: { __typename?: 'Comment', id: string, content: string, user: { __typename?: 'User', id: string, name: string, image: string }, post?: { __typename?: 'Post', id: string } | null } };

export type CreatePinMutationVariables = Exact<{
  input: CreatePinInput;
}>;


export type CreatePinMutation = { __typename?: 'Mutation', createPin: { __typename?: 'Post', id: string, title: string, image: string } };

export type FeedQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedQuery = { __typename?: 'Query', feed: Array<{ __typename?: 'Post', id: string, title: string, destination: string, about: string, image: string, user?: { __typename?: 'User', id: string, image: string, name: string } | null, save?: Array<{ __typename?: 'Save', id: string, user: { __typename?: 'User', id: string } }> | null }> };

export type GetPinQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type GetPinQuery = { __typename?: 'Query', getPin: { __typename?: 'Post', id: string, image: string, title: string, about: string, destination: string, category: { __typename?: 'Category', name: string }, user?: { __typename?: 'User', id: string, name: string, image: string } | null, comments: Array<{ __typename?: 'Comment', id: string, content: string, user: { __typename?: 'User', id: string, name: string, image: string } }> } };

export type GetUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', id: string, name: string, image: string, save?: Array<{ __typename?: 'Save', id: string, post: { __typename?: 'Post', title: string } }> | null, posts: Array<{ __typename?: 'Post', id: string, title: string, about: string, destination: string, image: string, user?: { __typename?: 'User', id: string, image: string, name: string } | null, save?: Array<{ __typename?: 'Save', id: string, user: { __typename?: 'User', id: string } }> | null }> } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name: string, image: string, email: string } };

export type MoreQueryVariables = Exact<{
  category: Scalars['String'];
  postId: Scalars['String'];
}>;


export type MoreQuery = { __typename?: 'Query', more: Array<{ __typename?: 'Post', id: string, title: string, image: string, about: string, destination: string, comments: Array<{ __typename?: 'Comment', id: string }>, save?: Array<{ __typename?: 'Save', id: string, user: { __typename?: 'User', id: string, name: string, image: string } }> | null, user?: { __typename?: 'User', id: string, name: string, image: string } | null }> };

export type SearchQueryVariables = Exact<{
  searchTerm: Scalars['String'];
}>;


export type SearchQuery = { __typename?: 'Query', search: Array<{ __typename?: 'Post', id: string, title: string, destination: string, user?: { __typename?: 'User', id: string, image: string } | null, save?: Array<{ __typename?: 'Save', user: { __typename?: 'User', id: string } }> | null }> };

export type SavePostMutationVariables = Exact<{
  postId: Scalars['String'];
  userId: Scalars['String'];
}>;


export type SavePostMutation = { __typename?: 'Mutation', savePost: { __typename?: 'SavePayload', success: boolean, message: string } };


export const AddCommentDocument = gql`
    mutation AddComment($postId: String!, $content: String!) {
  addComment(postId: $postId, content: $content) {
    id
    content
    user {
      id
      name
      image
    }
    post {
      id
    }
  }
}
    `;
export type AddCommentMutationFn = Apollo.MutationFunction<AddCommentMutation, AddCommentMutationVariables>;

/**
 * __useAddCommentMutation__
 *
 * To run a mutation, you first call `useAddCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCommentMutation, { data, loading, error }] = useAddCommentMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useAddCommentMutation(baseOptions?: Apollo.MutationHookOptions<AddCommentMutation, AddCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCommentMutation, AddCommentMutationVariables>(AddCommentDocument, options);
      }
export type AddCommentMutationHookResult = ReturnType<typeof useAddCommentMutation>;
export type AddCommentMutationResult = Apollo.MutationResult<AddCommentMutation>;
export type AddCommentMutationOptions = Apollo.BaseMutationOptions<AddCommentMutation, AddCommentMutationVariables>;
export const CreatePinDocument = gql`
    mutation CreatePin($input: CreatePinInput!) {
  createPin(input: $input) {
    id
    title
    image
  }
}
    `;
export type CreatePinMutationFn = Apollo.MutationFunction<CreatePinMutation, CreatePinMutationVariables>;

/**
 * __useCreatePinMutation__
 *
 * To run a mutation, you first call `useCreatePinMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePinMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPinMutation, { data, loading, error }] = useCreatePinMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePinMutation(baseOptions?: Apollo.MutationHookOptions<CreatePinMutation, CreatePinMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePinMutation, CreatePinMutationVariables>(CreatePinDocument, options);
      }
export type CreatePinMutationHookResult = ReturnType<typeof useCreatePinMutation>;
export type CreatePinMutationResult = Apollo.MutationResult<CreatePinMutation>;
export type CreatePinMutationOptions = Apollo.BaseMutationOptions<CreatePinMutation, CreatePinMutationVariables>;
export const FeedDocument = gql`
    query FEED {
  feed {
    id
    title
    destination
    about
    image
    user {
      id
      image
      name
    }
    save {
      id
      user {
        id
      }
    }
  }
}
    `;

/**
 * __useFeedQuery__
 *
 * To run a query within a React component, call `useFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useFeedQuery(baseOptions?: Apollo.QueryHookOptions<FeedQuery, FeedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
      }
export function useFeedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FeedQuery, FeedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FeedQuery, FeedQueryVariables>(FeedDocument, options);
        }
export type FeedQueryHookResult = ReturnType<typeof useFeedQuery>;
export type FeedLazyQueryHookResult = ReturnType<typeof useFeedLazyQuery>;
export type FeedQueryResult = Apollo.QueryResult<FeedQuery, FeedQueryVariables>;
export const GetPinDocument = gql`
    query GetPin($postId: String!) {
  getPin(postId: $postId) {
    id
    image
    title
    about
    destination
    category {
      name
    }
    user {
      id
      name
      image
    }
    comments {
      id
      content
      user {
        id
        name
        image
      }
    }
  }
}
    `;

/**
 * __useGetPinQuery__
 *
 * To run a query within a React component, call `useGetPinQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPinQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPinQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useGetPinQuery(baseOptions: Apollo.QueryHookOptions<GetPinQuery, GetPinQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPinQuery, GetPinQueryVariables>(GetPinDocument, options);
      }
export function useGetPinLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPinQuery, GetPinQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPinQuery, GetPinQueryVariables>(GetPinDocument, options);
        }
export type GetPinQueryHookResult = ReturnType<typeof useGetPinQuery>;
export type GetPinLazyQueryHookResult = ReturnType<typeof useGetPinLazyQuery>;
export type GetPinQueryResult = Apollo.QueryResult<GetPinQuery, GetPinQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($userId: String!) {
  getUser(userId: $userId) {
    id
    name
    image
    save {
      id
      post {
        title
      }
    }
    posts {
      id
      title
      about
      destination
      image
      user {
        id
        image
        name
      }
      save {
        id
        user {
          id
        }
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const MeDocument = gql`
    query ME {
  me {
    id
    name
    image
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MoreDocument = gql`
    query More($category: String!, $postId: String!) {
  more(category: $category, postId: $postId) {
    id
    title
    image
    about
    destination
    comments {
      id
    }
    save {
      id
      user {
        id
        name
        image
      }
    }
    user {
      id
      name
      image
    }
  }
}
    `;

/**
 * __useMoreQuery__
 *
 * To run a query within a React component, call `useMoreQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoreQuery({
 *   variables: {
 *      category: // value for 'category'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useMoreQuery(baseOptions: Apollo.QueryHookOptions<MoreQuery, MoreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoreQuery, MoreQueryVariables>(MoreDocument, options);
      }
export function useMoreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoreQuery, MoreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoreQuery, MoreQueryVariables>(MoreDocument, options);
        }
export type MoreQueryHookResult = ReturnType<typeof useMoreQuery>;
export type MoreLazyQueryHookResult = ReturnType<typeof useMoreLazyQuery>;
export type MoreQueryResult = Apollo.QueryResult<MoreQuery, MoreQueryVariables>;
export const SearchDocument = gql`
    query SEARCH($searchTerm: String!) {
  search(searchTerm: $searchTerm) {
    id
    title
    destination
    user {
      id
      image
    }
    save {
      user {
        id
      }
    }
  }
}
    `;

/**
 * __useSearchQuery__
 *
 * To run a query within a React component, call `useSearchQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchQuery({
 *   variables: {
 *      searchTerm: // value for 'searchTerm'
 *   },
 * });
 */
export function useSearchQuery(baseOptions: Apollo.QueryHookOptions<SearchQuery, SearchQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
      }
export function useSearchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchQuery, SearchQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchQuery, SearchQueryVariables>(SearchDocument, options);
        }
export type SearchQueryHookResult = ReturnType<typeof useSearchQuery>;
export type SearchLazyQueryHookResult = ReturnType<typeof useSearchLazyQuery>;
export type SearchQueryResult = Apollo.QueryResult<SearchQuery, SearchQueryVariables>;
export const SavePostDocument = gql`
    mutation SavePost($postId: String!, $userId: String!) {
  savePost(postId: $postId, userId: $userId) {
    success
    message
  }
}
    `;
export type SavePostMutationFn = Apollo.MutationFunction<SavePostMutation, SavePostMutationVariables>;

/**
 * __useSavePostMutation__
 *
 * To run a mutation, you first call `useSavePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSavePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [savePostMutation, { data, loading, error }] = useSavePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useSavePostMutation(baseOptions?: Apollo.MutationHookOptions<SavePostMutation, SavePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SavePostMutation, SavePostMutationVariables>(SavePostDocument, options);
      }
export type SavePostMutationHookResult = ReturnType<typeof useSavePostMutation>;
export type SavePostMutationResult = Apollo.MutationResult<SavePostMutation>;
export type SavePostMutationOptions = Apollo.BaseMutationOptions<SavePostMutation, SavePostMutationVariables>;