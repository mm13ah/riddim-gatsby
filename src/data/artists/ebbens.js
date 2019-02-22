import React from 'react';
import ebbensPic from '../../images/artists/EbbensSquare.jpg';

const info = (<div>
  <p>
    Being the youngest artist in Riddim's artist collective has not stopped Ebbens from being 
    one of its most prolific artists. With a plethora of experience, coupled with a skill that 
    would compete with even the most experienced DJs - the name Ebbens is an institution of the 
    Riddim Records family.
  </p>
  <p>
    Joining the ranks of the Riddim Records artist collective in 2017, as well being one of 
    Riddim's in-house promoters, Ebbens has represented the brand both up and down the UK 
    and internationally, and will continue to tear up dancefloors for the foreseeable future.
  </p>
</div>);

const ebbens = {
  key: 'ebbens',
  name: 'Ebbens',
  social: {
    soundcloud: 'https://soundcloud.com/lukeebbens',
    facebook: 'https://www.facebook.com/ebbensdj/',
    aor: 'https://soundcloud.com/riddimrecordsuk/aor-ebbens-promo',
  },
  info: info,
  pic: ebbensPic,
};

export default ebbens;