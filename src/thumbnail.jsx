import './index.css';
import logo from './logo.svg';
import correct from './tick';
function Thumbnail(){
  return(
    <>
    <div>

        <div className="top"><img className="image" src={logo} alt="Logo" /><span className="rayna">rayna ui </span><span className="version">v 1.0</span><span className="free">FREE</span></div>

        <div className="chotu">
        <p>The Ultimate Figma Design </p>
        <p>System For SaaS Teams</p></div>
        
        <div className='box'>
        <span className="orange">{correct()} 100+ Styles</span>

<span className="orange">{correct()} Components</span>
<span className="orange">{correct()} Variants</span>
</div>
<div className='box'>
<span className="orange">{correct()} Auto Layout</span>
<span className="orange">{correct()} Documentation</span>
</div>
<img className='yo' src="https://cdn.dribbble.com/userupload/3160944/file/original-0174285f5775b729db78b2eea02a73fd.png" alt="yo" />

</div>
    </>
  )
}
export default Thumbnail;