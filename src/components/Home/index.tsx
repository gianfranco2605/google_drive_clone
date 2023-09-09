import { signIn, signOut } from "next-auth/react";

import { useFetchSession } from "@/hooks/useSession";
import Button from "@/components/Button";
import styles from "./Home.module.scss"
const HomeComponent = () => {

const { session } = useFetchSession()

console.log(session);

  return (   
    <div className={styles.authBtn}>
    {session ? 
        <img src={session?.user.image as string} alt="imagen" className={styles.profileImage} />
       : 
       <Button  
      btnClass="btn-primary" 
      title="Sign In" 
      onClick={() => signIn()}
      /> }
</div>  
  )
}

export default HomeComponent