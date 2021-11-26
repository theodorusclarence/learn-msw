import * as React from 'react';

import Layout from '@/components/layout/Layout';
import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className=''>
          <div className='flex flex-col items-center justify-center text-center min-h-main layout'>
            <h1>Learn MSW</h1>
            <p className='mt-2 text-sm text-gray-700'>MSW with Next.js</p>
            <p className='mt-2 text-sm text-gray-600'>
              <CustomLink href='https://github.com/theodorusclarence/learn-msw'>
                See the repository
              </CustomLink>
            </p>

            <footer className='absolute text-gray-500 bottom-2'>
              © {new Date().getFullYear()} By{' '}
              <CustomLink href='https://theodorusclarence.com?ref=tsnextstarter'>
                Theodorus Clarence
              </CustomLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
