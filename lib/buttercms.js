import Butter from 'buttercms';

const butter = Butter(process.env.BUTTERCMS_API_KEY);

export async function getPosts() {
  try {
    const response = await butter.post.list({
      page: 1,
      page_size: 50,
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPost(slug) {
  try {
    const response = await butter.post.retrieve(slug);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export async function getAllPostSlugs() {
  try {
    const response = await butter.post.list({
      page: 1,
      page_size: 100,
    });
    return response.data.data.map((post) => post.slug);
  } catch (error) {
    console.error('Error fetching post slugs:', error);
    return [];
  }
}
