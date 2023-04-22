import { View, Text, TextInput, Button, FlatList, Image } from 'react-native'
import React, { useState } from 'react'

const Movie = () => {
  const [serachText, setSearchText] = useState('');
  const [movieList, setMovieList] = useState([]);
  const onSearchMovie = (inputMovie) => {
    setSearchText(inputMovie);
  }

  const findMovies = async () => {
    let respObj = await fetch(`https://www.omdbapi.com/?apikey=915cbc57&s=${serachText}`);
    let moviesObj = await respObj.json();
    setMovieList(moviesObj.Search);

    //rconsole.log(moviesObj.Search);
    setSearchText('');


  }
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text>Movie</Text>
      <TextInput
        value={serachText}
        onChangeText={onSearchMovie}
        placeholder='Enter the movie'
      />
      <Button title='Find Movie' onPress={findMovies} />
      {movieList.length>0 && <View>
        <Text>Found Matching Movies</Text>
        <FlatList
          data={movieList}
          renderItem={({ item }) => {
            return (
              <View>
                <Image style={{ width: 200, height: 150, margin: 15 }} source={{ uri: item.Poster }} />
                <Text>{item.Title}</Text>
                <Text>{item.Year}</Text>
              </View>
            )
          }}
        />
      </View>}



    </View>
  )
}

export default Movie;