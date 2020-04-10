window.onscroll = () => {
    const nav = document.querySelector('#navbar-div');
    const navArrow = document.querySelector('#arrow');
    if(this.scrollY <= 200) nav.className = ''; else nav.className = 'scroll';
    if(this.scrollY <= 200) navArrow.className = ''; else navArrow.className = 'scroll';
  };