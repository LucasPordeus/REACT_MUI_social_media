
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import styled from 'styled-components';


const Post = ({Person, Text}) => {

  const Comments = styled.div`
  display: flex;
  height: 30px;
  width: 80%;
  font-size: 15px;
  margin-left: 20px;
  `;

  const textComments = styled.div`
  width: 100%;
  color: grey;
  `;
  
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar src="lucas.jpg"/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Lucas"
        subheader="October 18, 2023"
      />
      <CardMedia
        component="img"
        height="200px"
        image="https://images.pexels.com/photos/6009423/pexels-photo-6009423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lindo Por Do Sol.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
          <p>30k</p>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
          <p>30k</p>
        </IconButton>
      </CardActions>
      <Comments>
        <textComents><b>{Person}</b>:</textComents>
        <textComents>{Text}</textComents>
      </Comments>
      
    </Card>
  );
};

export default Post;

