from boa.interop.Neo.Runtime import Log
from boa.interop.Neo.Storage import GetContext, Put, Get
from boa.builtins import concat, list


def Main(operation, args):
    if operation == 'PostComment':
        return post_comment(args[0], args[1], args[2], args[3])
    elif operation == 'EditComment':
        return 1
    elif operation == 'GetComment':
        #passing in the comment id.
        comment_id = args[0]
        comment_items = get_comment_by_id(comment_id)
        return comment_items
    elif operation == 'ListComments':
        return 1
    else:
        Log('No valid operation was submitted.')


# posting a new comment to the system.
def post_comment(user_name, email, text_value, comment_id):
    context = GetContext()

    comment_id = Get(context, 'latest_comment_id')
    if not comment_id:
        comment_id = 1
    Put(context, 'latest_comment_id', comment_id + 1)

    comment_key= concat('comment.', comment_id)
    user_name_key = concat(comment_key, '.user_name')
    email_key = concat(comment_key, '.email')
    text_key = concat(comment_key, '.text')

    Put(context, user_name_key, user_name)
    Put(context, email_key, email)
    Put(context, text_key, text_value)

    return comment_id


def get_comment_by_id(comment_id):
    context = GetContext()

    comment_key = concat('comment.', comment_id)
    user_name_key = concat(comment_key, '.user_name')
    email_key = concat(comment_key, '.email')
    text_key = concat(comment_key, '.text')

    user_name = Get(context, user_name_key)
    email = Get(context, email_key, email)
    text_value = Get(context, text_key, text_value)

    #Creating a list for the comment items and return them
    comment_full = list(length=3)
    comment_full[0] = user_name
    comment_full[1] = email
    comment_full[2] = text_value

    return comment_full