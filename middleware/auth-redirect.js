export default async function ({ $auth, redirect, store, route }) {
    if (!$auth.loggedIn) {
      console.log(route);
      redirect(`/login?redirect=${route.path}`);
    }
  };