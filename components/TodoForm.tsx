import {Pressable, StyleSheet, Text, TextInput, View} from "react-native";
import uuid from 'react-native-uuid';

export const TodoForm = ({setTodos, text, setText}: {
    setTodos: any,
    text: string,
    setText: any
}) => {

    const addTodoHandler = () => {
        const newTodo = [{
            id: uuid.v4(),
            text
        }]

        setTodos((prev: any) => prev.concat(newTodo))
        setText("")
    }

    return (
        <View style={styles.formContainer}>
            <TextInput value={text} placeholder="Write Something" style={styles.formInput} onChangeText={setText}
                       clearButtonMode="always" clearTextOnFocus={true}/>
            <Pressable style={styles.formButton} onPress={addTodoHandler}>
                <Text style={styles.formButtonText}>Add</Text>
            </Pressable>
        </View>
    )
}

export const styles = StyleSheet.create({
    formContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        width: "100%",
        gap: 4,
        marginTop: 12
    },
    formInput: {
        borderWidth: 2,
        borderColor: 'gray',
        padding: 10,
        flex: 1,
        borderRadius: 5,
    },
    formButton: {
        backgroundColor: "#256eff",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 5
    },
    formButtonText: {
        color: "#FFF",
    }
})