import * as React from 'react';
import "./TransferList.css"
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

function not(a: readonly number[], b: any) {
    
    return a.filter((value: any) => {
        return b.map((data:any)=>data.name).indexOf(value.name) === -1
    });
}

function intersection(a: readonly number[], b: any) {
    return a.filter((value: any) => {
        
        //   return  b.map((data:any)=>data.name).indexOf(value) !== -1 findIndex
        return { ...b.findIndex((data: any) => data.name === value), }
    });

}

export default function TransferList(props: any) {
    let { selectedCourses, allCourses, modalHandler } = props
    console.log(props, "transferlist")
    const [checked, setChecked] = React.useState<any>([]);
    const [left, setLeft] = React.useState<readonly number[]>(selectedCourses);
    const [right, setRight] = React.useState<readonly number[]>(allCourses);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);



    const handleToggle = (value: any) => () => {
        const currentIndex = checked.findIndex((data: any) => data.name === value.name);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const removeDuplicates = (arr: any) => {
        return arr.filter((v: any, i: any, a: any) => a.findIndex((t: any) => (t.courseId === v.courseId)) === i)
    }

    const handleAllRight = () => {
        setRight(right.concat(left));
        setLeft([]);
    };

    const handleCheckedRight = () => {
        let rightTemp = removeDuplicates(right.concat(leftChecked))
        let leftTemp = removeDuplicates(not(left, leftChecked))
        setRight(rightTemp);
        setLeft(leftTemp);
        setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
        let leftTemp = removeDuplicates(left.concat(rightChecked))
        let rightTemp = removeDuplicates(not(right, rightChecked))
        setLeft(leftTemp);
        setRight(rightTemp);
        setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
        setLeft(left.concat(right));
        setRight([]);
    };

    const customList = (items: readonly number[]) => (
        <Paper sx={{ width: 200, height: 230, overflow: 'auto' }}>
            <List dense component="div" role="list">
                {items.map((data: any) => {
                    console.log('transfer left data', data)
                    const value = data.name;
                    const labelId = `transfer-list-item-${value}-label`;
                    
                    return (
                        <ListItem
                            key={value}
                            role="listitem"
                            button
                            onClick={handleToggle(data)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    // checked.name.indexOf(value) !== -1
                                    checked={checked.findIndex((data: any) => data.name === value) !== -1}
                                    //   checked={checked.map((data:any)=>data.name===value)}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{
                                        'aria-labelledby': labelId,
                                    }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value} />
                        </ListItem>
                    );
                })}
                <ListItem />
            </List>
        </Paper>
    );

    return (
        <Grid>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item>
                    <Grid>Courses asigned for this team</Grid>

                    {customList(left)}</Grid>
                <Grid item>
                    <Grid container direction="column" alignItems="center">
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleAllRight}
                            disabled={left.length === 0}
                            aria-label="move all right"
                        >
                            ≫
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedRight}
                            disabled={leftChecked.length === 0}
                            aria-label="move selected right"
                        >
                            &gt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleCheckedLeft}
                            disabled={rightChecked.length === 0}
                            aria-label="move selected left"
                        >
                            &lt;
                        </Button>
                        <Button
                            sx={{ my: 0.5 }}
                            variant="outlined"
                            size="small"
                            onClick={handleAllLeft}
                            disabled={right.length === 0}
                            aria-label="move all left"
                        >
                            ≪
                        </Button>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid>All the available courses</Grid>
                    {customList(right)}</Grid>

            </Grid>
            <Grid style={{ marginLeft: 150 }}>
                <Button className="transfer-btn"
                    sx={{ my: 0.5 }}
                    //onClick={updateTeamHandler}
                >update</Button>
                <Button className="transfer-btn"
                    sx={{ my: 0.5 }}
                    onClick={modalHandler}
                >cancel</Button>
            </Grid>
        </Grid>
    );
}