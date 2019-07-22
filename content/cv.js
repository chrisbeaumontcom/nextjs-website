const content = `
<style>
img.imgcontent {
  max-width:400px;
  width: 100%;
  height: auto;
  float:right;
}
table.cv td {
  font-size: 12px;;
}
table.cv td:first-child {
  vertical-align: top;
  padding-right:10px;
}
ul.cv li {
  font-size: 12px;;
}
</style>
<h2><em>Curriculum Vitae</em></h2>

<p><strong>Christopher Beaumont</strong></p>

<p>Born: Melbourne, Australia 1961</p>

<h2>Studied</h2>

<table border="0" class="cv" id="study">
<tbody>
<tr>
<td class="date">1997</td>
<td class="items"><a href="http://www.swin.edu.au/"
target="_blank">Swinburne University of Technology</a> - Multimedia
Software Development</td>
</tr>

<tr>
<td class="date">1985-87</td>
<td class="items"><a href="http://www.vca.unimelb.edu.au/"
target="_blank">Victorian College of the Arts</a> - Painting &amp;
Sculpture</td>
</tr>

<tr>
<td class="date">1984</td>
<td class="items">Prahran College of TAFE(now Swinburne University)
- Dip. TOP Art &amp; Design</td>
</tr>

<tr>
<td class="date">1980-83</td>
<td class="items"><a href="http://www.unimelb.edu.au/"
target="_blank">University of Melbourne</a> - Medicine</td>
</tr>
</tbody>
</table>

<h2>Solo Exhibitions</h2>

<table border="0" class="cv" id="solo">
<tbody>
<tr>
<td class="date">2017</td>
<td class="items"><em>Still Life with Variations</em> - Olsen
Annex, Woollahra NSW</td>
</tr>

<tr>
<td class="date">2014</td>
<td class="items"><em>Still Life Paintings and Commissions</em> -
fortyfivedownstairs, Melbourne VIC</td>
</tr>

<tr>
<td class="date">2008</td>
<td class="items"><em>Organic Chemistry: Still Life Paintings by
Christopher Beaumont</em> - Deloitte, VIC</td>
</tr>

<tr>
<td class="date">2006</td>
<td class="items">Bendigo Art Gallery, VIC<br />
 Eva Breuer Art Dealer, Woollahra NSW</td>
</tr>

<tr>
<td class="date">2005</td>
<td class="items">Cobalt Gallery, South Yarra VIC</td>
</tr>

<tr>
<td class="date">2004</td>
<td class="items">Fortyfivedownstairs, Melbourne VIC</td>
</tr>

<tr>
<td class="date">1995</td>
<td class="items">Scope Gallery, Fitzroy VIC</td>
</tr>

<tr>
<td class="date">1992</td>
<td class="items">Botanical Gallery, South Yarra VIC</td>
</tr>

<tr>
<td class="date">1991</td>
<td class="items">Botanical Gallery, South Yarra VIC</td>
</tr>

<tr>
<td class="date">1990</td>
<td class="items">Pinacotheca Gallery, Richmond VIC</td>
</tr>
</tbody>
</table>

<h2>Group Exhibitions</h2>

<table border="0" class="cv" id="group">

<tbody>
<tr>
<td class="date">2017</td>
<td class="items">
<p><em>9x5 NOW,</em> Victorian College of the Arts, Melbourne
Vic.<br />
 45 at 45, Fortyfive Downstairs, Melbouren Vic</p>
</td>
</tr>

<tr>
<td class="date">2015</td>
<td class="items">
<p><em>Bayside Art Prize,</em> Brighton Vic.</p>
</td>
</tr>

<tr>
<td class="date">2012</td>
<td class="items">
<p><em>Moment</em> Monash University Faculty Gallery, Caulfield
Vic.</p>
</td>
</tr>

<tr>
<td class="date">2011</td>
<td class="items">
<p><em>Out of the Darkness</em> <a
href="http://www.gallerysmith.com.au/" target="_blank"
title="Link to Gallery Smith">Gallerysmith</a> North Melbourne
Vic.<br />
 <em>Between Sky &amp; Sea</em> Shakespeare Grove Studio Artists
City of Port Phillip Gallery St Kilda Vic.<br />
 Still Life - NGV International Members Lounge</p>
</td>
</tr>

<tr>
<td class="date">2010</td>
<td class="items">Still Life - NGV International Members
Lounge</td>
</tr>

<tr>
<td class="date">2008</td>
<td class="items">Williamstown Festival Contemporary Art Prize 2008
Vic.</td>
</tr>

<tr>
<td class="date">2007</td>
<td class="items">"New Artists" - AXIA Modern Art Armadale
Vic.<br />
 "Natura" - <a href="http://www.fortyfivedownstairs.com"
target="_blank">Fortyfive Downstairs</a> Melbourne Vic.</td>
</tr>

<tr>
<td class="date">2005</td>
<td class="items"><a
href="http://www.bendigoartgallery.com.au/Page/Page.asp?Page_Id=68&amp;h=0"
 target="_blank">The Authur Guy Memorial Painting Prize</a> The
Bendigo Art Gallery, Victoria.<br />
 "Neo Millennium" - Toyota Community Spirit Gallery, Toyota
Australia Vic.</td>
</tr>

<tr>
<td class="date">2004</td>
<td class="items">"120º of Separation" Linden St Kilda Centre for
Contemporary Art<br />
 "Compendium" ICON Gallery Deakin University Vic</td>
</tr>

<tr>
<td class="date">2003</td>
<td class="items">"St. Kilda Artists' Group Show" - Patrizia Autore
Gallery, St Kilda Vic.<br />
 St Kilda Art Supplies 10th Anniversary Show - Metropolis Gallery
St Kilda Vic.<br />
 Compendium - Platform Artists Group Spencer Street, Melbourne
Vic</td>
</tr>

<tr>
<td class="date">2002</td>
<td class="items">"St. Kilda Artists' Group Show" - Patrizia Autore
Gallery, St Kilda Vic.<br />
 JNF Genus Art Auction - Patrizia Autore Gallery, St Kilda Vic 
<!-- 20/02/2002 --></td>
</tr>

<tr>
<td class="date">2001</td>
<td class="items">"St Kilda Artists' Group Show" - Patrizia Autore
Gallery, St Kilda Vic.</td>
</tr>

<tr>
<td class="date">2000</td>
<td class="items">"St. Kilda Artists' Show" - Patrizia Autore
Gallery, St Kilda Vic.</td>
</tr>

<tr>
<td class="date">1999</td>
<td class="items">"Exposure" - <a href="http://www.lindenarts.org"
target="_blank">Linden Gallery, St Kilda Vic.</a></td>
</tr>

<tr>
<td class="date">1996</td>
<td class="items">"Food in Art" - <a
href="http://mprg.mornpen.vic.gov.au/" target="_blank">Mornington
Peninsula Regional Gallery</a>, Vic</td>
</tr>

<tr>
<td class="date">1995</td>
<td class="items">"Australia Felix" - Benalla Art Gallery,
Victoria</td>
</tr>

<tr>
<td class="date">1994</td>
<td class="items">"Sport the Greatest Theatre of All" - <a
href="http://www.adelaidefestival.com.au">Adelaide Festival Centre
Art Space, Adelaide SA</a><br />
 Touring Exhibition, South Australia, Vic., NSW, Qld., NT<br />
 "Re Production" - Gallery at Tolarno's St. Kilda Vic.<br />
 "Still Life" - Eva Breuer Gallery, Woollahra NSW<br />
 Conrad Jupiters' Aquisitive Prize - <a
href="http://www.gcac.com.au/" target="_blank">Gold Coast City Art
Gallery</a>, Coolangatta Queensland - aquired<br />
 "Love &amp; Ruin" - , St Kilda Town Hall, St Kilda Vic<br />
 "The Monster Footy Show" - Artists Garden, Fitzroy Vic.</td>
</tr>

<tr>
<td class="date">1993</td>
<td class="items">"Arrangement, Australian Still Life 1973-1993" -
<a href="http://www.heide.com.au/" target="_blank">Museum of Modern
Art at Heide</a>, Bulleen Vic.<br />
 Group Show - 135 Fitzroy Street Gallery St Kilda Vic.</td>
</tr>

<tr>
<td class="date">1992</td>
<td class="items">Margaret Stewart Endowment Collection, <a
href="http://www.ngv.vic.gov.au" target="_blank">National Gallery
of Victoria</a><br />
 Margaret Stewart Endowment Collection, <a
href="http://www.mcclellandgallery.com/" target="_blank">McClelland
Gallery, Langwarrin Vic</a><br />
 "St Kilda Festival - Food" - Gallery at Tolarno's St. Kilda
Vic<br />
 Summer Group Show - Botanical Gallery South Yarra Vic</td>
</tr>

<tr>
<td class="date">1991</td>
<td class="items">"Out of our Oeuvre" - Gallery at Tolarno's St.
Kilda Vic</td>
</tr>

<tr>
<td class="date">1990</td>
<td class="items">Moet &amp; Chandon Touring Exhibition, Australia
wide<br />
 "Art with Text" - <a href="http://www.monash.edu.au/muma/"
target="_blank">Monash University Gallery</a>, Victoria<br />
 "Good for Football" - Punters' Club Fitzroy Vic</td>
</tr>

<tr>
<td class="date">1989</td>
<td class="items">"From the Collection" - Monash University
Gallery, Clayton Victoria<br />
 Moet &amp; Chandon Touring Exhibition, Australia wide<br />
 "The Slab" - Punters' Club, Fitzroy Vic.<br />
 Group Show - Pinacotheca Gallery, Richmond Vic.</td>
</tr>

<tr>
<td class="date">1988</td>
<td class="items">"Site of Execution" - <a
href="http://www.accaonline.org.au/" target="_blank">Australian
Center for Contemporary Art</a>, Victoria</td>
</tr>

<tr>
<td class="date">1987</td>
<td class="items">Graduate Show - <a
href="http://www.vca.unimelb.edu.au/" target="_blank">Victorian
College of the Arts</a>, Melbourne Vic</td>
</tr>
</tbody>
</table>

<h2>Awards and Prizes</h2>

<table border="0" class="cv" id="awards">

<tbody>
<tr>
<td class="date">2015</td>
<td class="items">Finalist - Bayside Art Prize</td>
</tr>

<tr>
<td class="date">2008</td>
<td class="items">Finalist - Williamstown Festival Contemporary Art
Prize</td>
</tr>

<tr>
<td class="date">2005</td>
<td class="items">People's Choice Award - Arthur Guy Memorial
Painting Prize, Bendigo Art Gallery, Bendigo VIC<br />
 Finalist - Arthur Guy Memorial Painting Prize, Bendigo Art
Gallery, Bendigo VIC</td>
</tr>

<tr>
<td class="date">2000</td>
<td class="items">Art Spectrum Finest Artist Colours Prize - Post
Card Show Linden St.Kilda</td>
</tr>

<tr>
<td class="date">1999</td>
<td class="items">Sweet Design Acquisitive Prize - Post Card Show
Linden St. Kilda</td>
</tr>

<tr>
<td class="date">1994</td>
<td class="items">Conrad Jupiters' Prize, Gold Coast City Council,
QLD</td>
</tr>

<tr>
<td class="date">1992</td>
<td class="items">St Kilda City Council Prize (non
acquisitive)<br />
 Selected by Melbourne Theatre Company for Seasons Brochure</td>
</tr>

<tr>
<td class="date">1991</td>
<td class="items">Postcard Prize &amp; reproduction, St Kilda City
Council</td>
</tr>

<tr>
<td class="date">1990</td>
<td class="items">Finalist - Moet &amp; Chandon Touring
Exhibition</td>
</tr>

<tr>
<td class="date">1989</td>
<td class="items">Finalist - Moet &amp; Chandon Touring
Exhibition</td>
</tr>

<tr>
<td class="date">1987</td>
<td class="items">Hans and Sylvia Sumberg Prize (VCA)</td>
</tr>
</tbody>
</table>

<h2>Collections</h2>

<ul class="cv">
<li><a
href="https://www.ngv.vic.gov.au/explore/collection/work/5027/"
target="_blank">National Gallery of Victoria, Margaret Stewart
Endowment</a></li>

<li>Monash University Collection</li>

<li>BHP Collection - (ex) now dispersed through Christies</li>

<li>Western Mining Collection - (ex) now dispersed</li>

<li>Malleson Stephen Jaques Collection - (ex) dispersed through
Bonhams and Goodman</li>

<li>Gold Coast City Art Gallery</li>

<li>Australian Gallery of Sport &amp; Olympic Museum</li>

<li>City of Port Phillip</li>

<li>Lowensteins Arts Management</li>

<li>Peter MacCallum Cancer Centre</li>

<li>Private Collections</li>
</ul>

<h2>Bibliography</h2>

<table border="0" class="cv" id="biblio">
<tbody>
<tr>
<td class="date">2006</td>
<td class="items">McCullough Alan &amp; Susan, Encyclopedia of
Australian Art, Allen &amp; Unwin</td>
</tr>

<tr>
<td class="date">2004</td>
<td class="items">Robert Nelson "A Serve of Fruit &amp; Vegetables"
Review - <a href="http://www.theage.com.au" target="_blank">The
Age</a> Oct 22nd</td>
</tr>

<tr>
<td class="date">1995</td>
<td class="items">Catherine Lambert "Giving Life to the Ordinary"
Review - Herald-Sun February 19th<br />
 Robert Nelson "Contemplation of Fragile Riches" Review - <a
href="http://www.theage.com.au" target="_blank">The Age</a> March
1st</td>
</tr>

<tr>
<td class="date">1994</td>
<td class="items">Martin Flannagan, Exhibition Catalogue, "Sport
the Greatest Theatre of All" Adelaide Festival Centre Art
Space<br />
 McCullough Alan &amp; Susan, Encyclopedia of Australian Art, Allen
&amp; Unwin<br />
 Victoria Lyn &amp; John Rigby, Exhibition Catalogue Conrad
Jupiters' Art Prize</td>
</tr>

<tr>
<td class="date">1993</td>
<td class="items">Melbourne Theatre Company Brochure<br />
 John R Neeson, "Arrangement, Australian Still Life 1973-1993"
Exhibition Catalogue MOMA Heide<br />
 Robert Rooney, "Our Still Life Assurance" The Australian, December
11th<br />
 Christopher Heathcote, "An unfashionable but thought-provoking
show for lovers of art", The Age, December 22<br />
 Today Arts, Summer, Herald-Sun, January 12th<br />
 "Arrangements", Stages Magazine, January/February Edition.</td>
</tr>

<tr>
<td class="date">1992</td>
<td class="items">MIFA Brochure<br />
 Rebecca Lancashire, "A Penchant for Vegetables", The Age,
September 9<br />
 Rebecca Lancashire, "All the Art that's fit to see", Entertainment
Guide The Age, September 11<br />
 Exhibition Catalogue Margaret Stewart Endownment</td>
</tr>

<tr>
<td class="date">1991</td>
<td class="items">Andrew Masterson, Best Weekend, Age Weekend
Magazine, November 2</td>
</tr>

<tr>
<td class="date">1990</td>
<td class="items">Merryn Gates, "Art with Text" Exhibition
Catalogue, Monash University Press<br />
 Alex Selenitsch, Art Monthly, No. 34 September<br />
 Peter Hill, Tension Magazine, No. 23 October<br />
 Moet &amp; Chandon Touring Exhibition Catalogue</td>
</tr>

<tr>
<td class="date">1989</td>
<td class="items">Moet &amp; Chandon Touring Exhibition
Catalogue</td>
</tr>
</tbody>
</table>
`;

export default content;
