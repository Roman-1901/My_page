import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
        return <div className={classes.dialogs}>
                    <div className={classes.dialogsItems}>
                        <div className={classes.dialog + ' ' + classes.active}>
                            Jenya
                        </div>
                        <div className={classes.dialog}>
                            Anton
                        </div>
                        <div className={classes.dialog}>
                            Dima
                        </div>
                        <div className={classes.dialog}>
                            Lecha
                        </div>
                    </div>
                    <div className={classes.messages}>
                        <div className={classes.message}>Hi</div>
                        <div className={classes.message}>Huy sosi</div>
                        <div className={classes.message}>qwertykbfg</div>
                    </div>
                </div>
}

export default Dialogs;