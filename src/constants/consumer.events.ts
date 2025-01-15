export enum consumerEvents {
    media_upload_success="MEDIA_UPLOAD_SUCCESS",
    media_upload_failed="MEDIA_UPLOAD_FAILED",

    avatar_upload_success="AVATAR_UPLOAD_SUCCESS",
    avatar_upload_failed="AVATAR_UPLOAD_FAILED",

    avatar_updated="AVATAR_UPDATED",

    post_deleted="POST_DELETED",
    
    new_post="NEW_POST",
    new_comment = "NEW_COMMENT",
    new_like = "NEW_LIKE",
    new_message = "NEW_message",
    
    follow_request = "FOLLOW_REQUEST",
    follow_req_accepted = "FOLLOW_REQUEST_ACCEPTED",
    followed_back = "FOLLOWED_BACK",

    follow= "FOLLOW",
    unfollow= "UNFOLLOW",
}