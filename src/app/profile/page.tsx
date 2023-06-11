import { cookies } from 'next/headers';
import Image from 'next/image';
import { getMe, getMyArticles, getMyComments, getMyLikedArticles } from '../../services';

export default async function Profile() {
  const cookieHeader = cookies().toString();

  const myData = await getMe({ cookieHeader });
  const myArticleData = await getMyArticles({}, { cookieHeader });
  const myCommentData = await getMyComments({}, { cookieHeader });
  const myLikedArticleData = await getMyLikedArticles({}, { cookieHeader });
  const bioSection = [
    { title: 'bio', content: 'rook!ez' },
    { title: '지역', content: '서울' },
    { title: '소속', content: '42seoul' },
  ];

  return (
    <div>
      <Image src='/blushblush.png' alt='blush' width={100} height={100} />
      {myData && (
        <div>
          <h2 style={{ display: 'inline-block' }}>{myData.nickname}</h2>
          <span> is {myData.role}</span>
        </div>
      )}
      <div>
        <h3>정보</h3>
        <div>
          <span>chichoon.choi@gmail.com</span>
        </div>
        <div>
          <span>chichoon</span>
        </div>
        <div>
          <span>cchichoon</span>
        </div>
        <div>
          <span>cchichoon</span>
        </div>
        <div>
          <span>cchichoon</span>
        </div>
        <div className='p-4'>
          {bioSection.map((bio) => (
            <div className='mb-3 last:mb-0'>
              <h4>{bio.title}</h4>
              <span>{bio.content}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3>내 게시글</h3>
        {myArticleData && (
          <ul>
            {myArticleData.data.map((article: any, index: number) => (
              <li key={`my-article-${index}`}>{article.title}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3>내 댓글</h3>
        {myCommentData && (
          <ul>
            {myCommentData.data.map((comment: any, index: number) => (
              <li key={`my-comment-${index}`}>{comment.content}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3>좋아요한 게시글</h3>
        {myLikedArticleData && (
          <ul>
            {myLikedArticleData.data.map((article: any, index: number) => (
              <li key={`my-liked-article-${index}`}>{article.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
