function getProfileData() {
  fetch(`https://randomuser.me/api`).then((res) => res.json());
}

console.log(getProfileData());
