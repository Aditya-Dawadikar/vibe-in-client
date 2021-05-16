import './App.css';
import {BrowserRouter, Switch, Route ,withRouter} from 'react-router-dom'

import Login from './screens/Login/Login';

import UserHome from './screens/User/UserHome'
import UserViewAlbum from './screens/User/UserViewAlbum'
import UserSavedSongs from './screens/User/UserSavedTracks'
import UserPlayLists from './screens/User/UserPlayLists'
import UserAllTracks from './screens/User/UserAllTracks'
import UserAllAlbums from './screens/User/UserAllAlbums'

import ContentCreatorHome from './screens/ContentCreator/ContentCreatorHome'
import ContentCreatorTracks from './screens/ContentCreator/ContentCreatorTracks'
import ContentCreatorAlbums from './screens/ContentCreator/ContentCreatorAlbums'
import ContentCreatorViewAlbum from './screens/ContentCreator/ContentCreatorViewAlbum'
import ContentCreatorCreateAlbum from './screens/ContentCreator/ContentCreatorCreateAlbum'
import ContentCreatorUploadTrack from './screens/ContentCreator/ContentCreatorUploadTrack'
import ContentCreatorAllTracks from './screens/ContentCreator/ContentCreatorAllTracks'
import ContentCreatorAllAlbums from './screens/ContentCreator/ContentCreatorAllAlbums'

function App() {
  return (
    <div>
      
      <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                
                {/* User routes*/}
                <Route  path='/user/home' component={UserHome} />
                <Route  path='/user/savedsongs' component={UserSavedSongs} />
                <Route path='/user/playlists' component={UserPlayLists} />
                <Route path='/user/viewalbum' component={UserViewAlbum} />
                <Route path='/user/alltracks' component={UserAllTracks} />
                <Route path='/user/allalbums' component={UserAllAlbums} />
                
                {/* Content creator routes*/}
                <Route path='/contentcreator/home' component={ContentCreatorHome} />
                <Route path='/contentcreator/mytracks' component={ContentCreatorTracks} />
                <Route path='/contentcreator/myalbums' component={ContentCreatorAlbums} />
                <Route path='/contentcreator/viewalbum' component={ContentCreatorViewAlbum}/>
                <Route path='/contentcreator/createalbum' component={ContentCreatorCreateAlbum}/>
                <Route path='/contentcreator/uploadtrack' component={ContentCreatorUploadTrack}/>
                <Route path='/contentcreator/alltracks' component={ContentCreatorAllTracks} />
                <Route path='/contentcreator/allalbums' component={ContentCreatorAllAlbums} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
