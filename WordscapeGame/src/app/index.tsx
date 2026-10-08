import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function HomeScreen() {
  const letters = ["C", "A", "T", "S", "R"];

  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [words, setWords] = useState<string[]>([]);
  const [score, setScore] = useState(0);

  const selectLetter = (letter: string) => {
    setSelectedLetters([...selectedLetters, letter]);
  };

  const clearWord = () => {
    setSelectedLetters([]);
  };

  const submitWord = () => {
    const word = selectedLetters.join("");

    if (word.length === 0) {
      return;
    }

    if (!words.includes(word)) {
      setWords([...words, word]);
      setScore(score + word.length * 10);
    }

    setSelectedLetters([]);
  };

  return (
    <SafeAreaView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>WORDSCAPE</Text>

        <Text style={styles.score}>
          ⭐ {score}
        </Text>
      </View>

      {/* Puzzle Area */}
      <View style={styles.puzzle}>
        <Text style={styles.subtitle}>
          Make a word!
        </Text>

        <View style={styles.wordBox}>
          {selectedLetters.map((letter, index) => (
            <Text key={index} style={styles.selectedLetter}>
              {letter}
            </Text>
          ))}
        </View>
      </View>

      {/* Letters */}
      <View style={styles.lettersContainer}>
        {letters.map((letter, index) => (
          <TouchableOpacity
            key={index}
            style={styles.letterButton}
            onPress={() => selectLetter(letter)}
          >
            <Text style={styles.letterText}>
              {letter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Buttons */}
      <View style={styles.buttons}>

        <TouchableOpacity
          style={styles.clearButton}
          onPress={clearWord}
        >
          <Text style={styles.buttonText}>
            Clear
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={submitWord}
        >
          <Text style={styles.buttonText}>
            Submit
          </Text>
        </TouchableOpacity>

      </View>

      {/* Found Words */}
      <View style={styles.wordsContainer}>
        <Text style={styles.wordsTitle}>
          Words Found
        </Text>

        {words.map((word, index) => (
          <Text key={index} style={styles.word}>
            ✓ {word}
          </Text>
        ))}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4E9D8",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#493323",
  },

  score: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#8B5E34",
  },

  puzzle: {
    alignItems: "center",
    marginBottom: 50,
  },

  subtitle: {
    fontSize: 18,
    color: "#76563D",
    marginBottom: 20,
  },

  wordBox: {
    height: 55,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  selectedLetter: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#493323",
  },

  lettersContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 12,
  },

  letterButton: {
    width: 65,
    height: 65,
    borderRadius: 33,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  letterText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#493323",
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    marginTop: 35,
  },

  clearButton: {
    backgroundColor: "#B9825B",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },

  submitButton: {
    backgroundColor: "#6B8E23",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  wordsContainer: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
  },

  wordsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#493323",
    marginBottom: 10,
  },

  word: {
    fontSize: 16,
    color: "#6B8E23",
    marginBottom: 5,
  },
});