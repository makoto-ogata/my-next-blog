import Head from 'next/head'
import Hero from 'components/hero'
import Container from 'components/container'
import PostBody from 'components/post-body'
import Contact from 'components/contact'
import {TwoColumn, TwoColumnMain, TwoColumnSidebar} from 'components/two-column'
import Image from 'next/image'
import eyecatch from 'images/about.jpg'

export default function About(){
    return (
        <Container>
            <Head>
                <title>アバウト</title>
            </Head>
            <Hero title="About" subtitle="About development activities" />
            <figure>
                <Image
                    src={eyecatch}
                    alt=""
                    layout="responsive"
                    size="(min-width: 1152px) 1152px, 100vw"
                    priority
                    placeholder="blur"
                />
            </figure>
            <TwoColumn>
                <TwoColumnMain>
                    <PostBody>
                        <p>
                            CUBEが得意とする分野はモノづくりです。3次元から2次元の造形、プログラミングやデザインなど、さまざまな技術を組み合わせることによって社会や環境と結びつけるクリエイティブを提案しつづけています。
                        </p>
                        <h2>モノづくりで目指していること</h2>
                        <p>
                            モノづくりではデータの解析からクリエイティブまで幅広いことを担当しています。新しいことを取り入れながら、ユーザーにマッチした提案を実現することが目標です。たくさんの開発・提供が数多くありますが、特にそこ磨く作業に力を入れています。
                        </p>
                        <h3>新しいことへのチャレンジ</h3>
                        <p>
                            今までと違うものを作ることで愛着が湧いてきます。そこで興味を持ったことは小さなものでもいいから取り入れて、良いものを作れるようにしています。小さなヒントから新しいものを生み出すようなモノづくりは、これからも続けていきたいです。
                        </p>
                    </PostBody>
                </TwoColumnMain>
                <TwoColumnSidebar>
                    <Contact />
                </TwoColumnSidebar>
            </TwoColumn>
        </Container>
    )
}