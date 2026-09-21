import type {Metadata} from 'next';
import {Header, Footer} from '../components/Shell';
import {site} from '../lib/site';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL(site.origin),
  title: {default:'Agentic Payments. Your Agent, Your Rules. | Veyro Network', template:'%s | Veyro Network'},
  icons:{icon:'/icon.svg'},
  robots:{index:true,follow:true},
};
export default function Layout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a><Header/>{children}<Footer/></body></html>;
}
