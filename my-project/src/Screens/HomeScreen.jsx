import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const colors = ['#ff0000', '#ffff00', '#00ff00', '#0000ff']; // Predefined set of colors

const HomeScreen = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');
  const [noteColor, setNoteColor] = useState('#ffffff'); // Default color
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    if (noteTitle.trim() !== '' && noteDescription.trim() !== '') {
      setNotes(prevNotes => [...prevNotes, { title: noteTitle, description: noteDescription, color: noteColor }]);
      setNoteTitle('');
      setNoteDescription('');
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.note, { backgroundColor: item.color }]}>
      <Text style={styles.noteTitle}>{item.title}</Text>
      <Text style={styles.noteDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter note title"
        onChangeText={text => setNoteTitle(text)}
        value={noteTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter note description"
        onChangeText={text => setNoteDescription(text)}
        value={noteDescription}
      />
      {/* Predefined set of colors */}
      <View style={styles.colorPicker}>
        {colors.map(color => (
          <TouchableOpacity
            key={color}
            style={[styles.colorButton, { backgroundColor: color }]}
            onPress={() => setNoteColor(color)}
          />
        ))}
      </View>
      <TouchableOpacity style={styles.addButton} onPress={addNote}>
        <Text style={styles.addButtonText}>Add Note</Text>
      </TouchableOpacity>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  colorPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  addButton: {
    backgroundColor: '#0069c0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  list: {
    marginTop: 20,
  },
  note: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  noteDescription: {
    fontSize: 16,
  },
});

export default HomeScreen;
