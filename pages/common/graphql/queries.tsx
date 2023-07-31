import { gql } from "@apollo/client";

export const LIST_BLOG = gql(`
    query {
        blogPosts {
            data {
                id
                attributes {
                    title
                }
            }
        }
    }`);

export const SINGLE_BLOG = gql(`
query GetBlogPost($blogId: ID!) {
    blogPosts(filters: { id: { eq: $blogId } }) {
        data {
            id
            attributes {
                title
                description
                body
            }
        } 
    }
}`);

export const LIST_ID = gql(`
    query {
        blogPosts {
            data {
                id
            }
        }
    }`);
