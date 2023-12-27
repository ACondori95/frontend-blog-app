import React from "react";
import MainLayout from "../../components/MainLayout";
import BreadCrumbs from "../../components/BreadCrumbs";
import {images} from "../../constants";
import {Link} from "react-router-dom";
import SuggestedPosts from "./container/SuggestedPosts";
import CommentsContainer from "../../components/comments/CommentsContainer";

const breadCrumbsData = [
  {name: "Home", link: "/"},
  {name: "Blog", link: "/blog"},
  {name: "Article title", link: "/blog/1"},
];

const postsData = [
  {
    _id: "1",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "2",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "3",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
  {
    _id: "4",
    image: images.Post1Image,
    title: "Help children get better education",
    createdAt: "2023-01-28T15:35:53.607+0000",
  },
];

const tagsData = [
  "Medical",
  "Lifestyle",
  "Learn",
  "Healthy",
  "Food",
  "Diet",
  "Education",
];

const ArticleDetailPage = () => {
  return (
    <MainLayout>
      <section className='container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start'>
        <article className='flex-1'>
          <BreadCrumbs data={breadCrumbsData} />
          <img
            className='rounded-xl w-full'
            src={images.Post1Image}
            alt='laptop'
          />
          <Link
            to='/blog?category=selectedCategory'
            className='text-primary text-sm font-roboto inline-block mt-4 md:text-base'>
            EDUCATION
          </Link>
          <h1 className='text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]'>
            Help children get better education
          </h1>
          <div className='mt-4 text-dark-soft'>
            <p className='leading-7'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Blanditiis neque, reprehenderit nam dolorum assumenda vel pariatur
              maxime delectus nihil ullam nulla porro architecto nostrum
              perferendis tempora eos vitae accusantium, deleniti aspernatur
              enim! Sunt voluptas, voluptatum laudantium officia hic ipsam eaque
              pariatur maiores non libero ducimus architecto nostrum? Nulla
              consequuntur exercitationem sequi magni, ab voluptatibus quasi,
              consectetur repellendus quo nemo nesciunt.
            </p>
          </div>
          <CommentsContainer className='mt-10' logginedUserId='a' />
        </article>
        <SuggestedPosts
          header='Latest Article'
          posts={postsData}
          tags={tagsData}
          className='mt-8 lg:mt-0 lg:max-w-xs'
        />
      </section>
    </MainLayout>
  );
};

export default ArticleDetailPage;
