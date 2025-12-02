import "./Profile.css";
const Profile = () => {
    return (
        <section className="profile site__section">
          <img className="profile__image" src="./assets/images/shi.jpeg" alt="Avatar" />
          <div className="profile__details">
            <h1 className="profile__name">Irely P. Martínez</h1>
            <button
              aria-label="Edit traveler profile"
              className="profile__edit-btn"
              type="button"
            ></button>
            <p className="profile__bio">PhD in Information Technology</p>
          </div>
          <button
            aria-label="Add new place"
            className="profile__add-place-btn"
            type="button"
          ></button>
        </section>
    );
}

export default Profile;