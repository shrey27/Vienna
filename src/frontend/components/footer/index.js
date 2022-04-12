import './footer.css';

export function Footer() {
  return (
    <footer className='footer__ctr flex-ct-ct flex-vertical sm-s'>
      <span className='footer__text tag md bl mg--half'>Connect With Me</span>
      <div>
        <a href='https://twitter.com/home' target='_blank' rel='noreferrer'>
          <i className='fa-brands fa-twitter'></i>
        </a>
        <a href='https://github.com/shrey27' target='_blank' rel='noreferrer'>
          <i className='fa-brands fa-github'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/shrey27/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fa-brands fa-linkedin'></i>
        </a>
      </div>
      <span className='footer__text tag sm sb cen mg--half'>
        © 2022 Acquaints Pvt Ltd. All rights reserved.
      </span>
    </footer>
  );
}
