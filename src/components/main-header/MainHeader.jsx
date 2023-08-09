import {MdPostAdd, MdMessage} from 'react-icons/md';

import styles from './MainHeader.module.css';

function MainHeader({onCreatePost}) {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>My Blog</h1>
            <MdPostAdd size={28} className={styles.addPost} onClick={onCreatePost} />
            <MdMessage size={28} className={styles.message} />
        </header>
    );
}

export default MainHeader