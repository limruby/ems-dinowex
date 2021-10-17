const PromoContent = ({ user }) => {

  function displayVideo() {
    if (user.video) {
      var section = [];
      for (var i = 0; i < user.video.length; i++) {
        section.push(
          <li>
            <a href={user.video[i].source}>{user.video[i].name}</a>
          </li>
        );
      }
      return section;
    }
  }

  function displayPoster() {
    if (user.poster) {
      var section = [];

      for (var i = 0; i < user.poster.length; i++) {
        // const imageBuffer = Buffer.from(user.poster[i].source.data); 
        section.push(
          <li>
            {user.poster[i].name}
          </li>
        );
      }
      return section;
    }
  }


  return (
    <div>
      <h4>Videos</h4>
      <ul>
        {displayVideo()}
      </ul>
      <hr />
      <h4>Poster</h4>
      <ul>
        {displayPoster()}
      </ul>
    </div>
  );

}




export default PromoContent;