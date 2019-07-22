const content = `
<style>
  img.res {
    width: 100%;
    max-width: 750px;
    height: auto;
  }
  p {
    font-size: 12px;
    line-height: 1.2;
    margin: 0 0 8px 0;
  }
  @media only screen and (min-width: 600px) {
    img.portrait {
      width: 100%;
      max-width: 300px;
      height: auto;
      float: right;
    }
  }
</style>
<p>
<img class="portrait" src="/static/img/serge_photo_300x305.jpg" alt="Serge poppies" />
</p>
<hr/>
<p>Based in Melbourne, Australia</p>
<p>Contact the artist directly: +61 427 338 951</p>
<p>email: chris@chrisbeaumont.com</p>
<hr/>
<p>
Please contact 
<a href="https://www.olsengallery.com/" target="_blank">
  Olsen Gallery
</a>
 for sales enquiries in Sydney, Australia
</p>
<p>&nbsp;</p>
<p>
<img class="res" src="/static/img/studio2010-06-26.jpg" alt="Studio2010-06-26" />
</p>
`;

export default content;
