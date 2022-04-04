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

export type Mutation = {
  __typename?: 'Mutation';
  googleLogin: AuthPayload;
  logout: User;
  refreshAuth: AuthPayload;
  savePost: SavePayload;
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
  categories: Array<Category>;
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
  getUser?: Maybe<User>;
  me: User;
  search: Array<Post>;
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

export type FeedQueryVariables = Exact<{ [key: string]: never; }>;


export type FeedQuery = { __typename?: 'Query', feed: Array<{ __typename?: 'Post', id: string, title: string, destination: string, about: string, image: string, save?: Array<{ __typename?: 'Save', id: string, user: { __typename?: 'User', id: string } }> | null }> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name: string, image: string, email: string } };

export type SearchQueryVariables = Exact<{
  searchTerm: Scalars['String'];
}>;


export type SearchQuery = { __typename?: 'Query', search: Array<{ __typename?: 'Post', id: string, title: string, destination: string, user?: { __typename?: 'User', id: string, image: string } | null, save?: Array<{ __typename?: 'Save', user: { __typename?: 'User', id: string } }> | null }> };

export type SavePostMutationVariables = Exact<{
  postId: Scalars['String'];
  userId: Scalars['String'];
}>;


export type SavePostMutation = { __typename?: 'Mutation', savePost: { __typename?: 'SavePayload', success: boolean, message: string } };


export const FeedDocument = gql`
    query FEED {
  feed {
    id
    title
    destination
    about
    image
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