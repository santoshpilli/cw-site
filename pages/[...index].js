import React from "react";
import { useRouter } from "next/router";
import PageSEO from "../components/common/PageSEO";
import {MetaData} from "../components/common/Helper"
import RenderSections from "../components/renderSections";
import menuData from './menudata.json'
import Layout from "../hoc/Layout";
import useSWR from 'swr';


export default function Home() {
  const canonicalTag = `${process.env.NEXT_PUBLIC_FRONTEND_URL}`

  const router = useRouter();
  const { query } = router;
  const pathSegments = query.index || [];
  const path = `/${pathSegments.join("/")}`;

  let matchedMenuItem = null;

  for (const menuItem of menuData) {
    if (menuItem.slug === path) {
      matchedMenuItem = menuItem;
      break;
    }
    if (menuItem.children) {
      for (const childItem of menuItem.children) {
        if (childItem.slug === path) {
          matchedMenuItem = childItem;
          break;
        }
      }
      if (matchedMenuItem) {
        break;
      }
    }
  }

  const { type, menuId } = matchedMenuItem || {};

  const PostComponent = () => {
    return (
      <Layout>
      <div>
        <h1>Post Component</h1>
      </div>
      </Layout>

    );
  };

  const fetcher = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  };

  const { data, error } = useSWR(`/api/pageData?menuId=${menuId}`, fetcher);

  return (
    <>
      <PageSEO 
        title={data?.pageTitle} 
        canonicalTag={canonicalTag}
        metatitleTag={MetaData[0].titleTag}
        metaDes={MetaData[0].metaDescription}
      />

      {type === 'page' && <RenderSections data={data} />}
      {type === 'post' && <PostComponent />}
      {type === 'form' && <Layout><h2>Form component</h2></Layout>
}
    </>
  );
}


