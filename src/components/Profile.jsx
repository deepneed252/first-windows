import React from 'react';

const Profile = () => {
    return (
        <main className="content">
            <div className="profile-bg">
                <img src="https://bf-france.com/uploads/category/image/1/category_col12_in_9_banbf1.jpg" alt="" />
            </div>
            <div className="profile">
                <img className="profile-ava" src="https://im0-tub-ru.yandex.net/i?id=130a3fd17a646c5ef51f74535b53da4f&n=13&exp=1" alt="" />
                <div className="desc">
                    <h3>Jonh Smith</h3>
                    <div>Date of  Birth: <span>13 january</span></div>
                    <div>City: <span>Ufa</span></div>
                    <div>Education: <span>BSU'11</span></div>
                    <div>Web Site: <span>deepneed.ru</span></div>
                </div>
            </div>
            <div className="newpost">
                <h3>My Posts</h3>
                <textarea name="" id="" cols rows="10"></textarea>
                <button>Send</button>
            </div>
            <div className="post">
                <img className="profile-ava" src="https://im0-tub-ru.yandex.net/i?id=130a3fd17a646c5ef51f74535b53da4f&n=13&exp=1" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut ex maiores eos magnam ut, enim placeat ratione deleniti ab!</p>
            </div>
            <div className="post">
                <img className="profile-ava" src="https://im0-tub-ru.yandex.net/i?id=130a3fd17a646c5ef51f74535b53da4f&n=13&exp=1" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut ex maiores eos magnam ut, enim placeat ratione deleniti ab!</p>
            </div>
        </main>
    );
}

export default Profile;