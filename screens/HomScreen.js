import * as React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CalendarComponent from '../Components/Calendar';

function HomeScreen() {

  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalCalendar, setModalcalendar] = React.useState(false);
  
  
  return (
    <View style={styles.homeScreenContainer}>
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          statusBarTranslucent
          hardwareAccelerated
        >
          <View style={styles.modalContainer}>
            <View style={{backgroundColor: 'white'}}>
                <View style={styles.modalBox}>
                    <Text style={styles.modalText}>Add new task</Text>
                    <TouchableOpacity
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Ionicons name="close-circle-outline" size={50} color="black" />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputBox}>
                    <View>
                        <Text style={{fontWeight: 'bold', marginBottom: 5}}>Task name</Text>
                        <TextInput style={styles.textInput} placeholder="Task name"/>
                    </View>
                    <View>
                        <Text style={{fontWeight: 'bold', marginBottom: 5}}>Task name</Text>
                        <TextInput style={styles.textInput} placeholder="Task name"/>
                    </View>
                    <View>
                        <Text style={{fontWeight: 'bold', marginBottom: 5}}>Task name</Text>
                        <TextInput style={styles.textInput} placeholder="Task name"/>
                    </View>
                </View>
            </View>
          </View>
        </Modal>

        <Modal
          visible={modalCalendar}
          transparent={true}
          animationType="slide"
          statusBarTranslucent
          hardwareAccelerated
        >
          <View style={styles.modalContainer}>
            <View style={{backgroundColor: 'white'}}>
                <View style={styles.modalBox}>
                    <Text style={styles.modalText}>Calendar</Text>
                    <TouchableOpacity
                        onPress={() => setModalcalendar(!modalCalendar)}
                    >
                        <Ionicons name="close-circle-outline" size={50} color="black" />
                    </TouchableOpacity>
                </View>
                <CalendarComponent />
            </View>
          </View>
        </Modal>
        <View style={styles.titleContainer}>
            <Text style={{fontSize: 50, fontWeight: 'bold'}}>ZONE</Text>
            <TouchableOpacity style={{marginRight: 10}}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Ionicons name="add-circle-outline" size={50} color="black" />
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.cardBox}
          onPress={() => setModalcalendar(!modalCalendar)}
        >
            <Text style={{fontSize: 20}}>26.05.2024</Text>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>1 / 7 Tasks</Text>
        </TouchableOpacity>
        <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 25}}>Today's tasks</Text>
        </View>

        <View style={styles.filterBox}>
            <TouchableOpacity style={[styles.cardBox, {borderRadius: 0, height: 50, backgroundColor: 'lightgrey'}]}>
                <Text>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cardBox, {borderRadius: 0, height: 50}]}>
                <Text>School</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cardBox, {borderRadius: 0, height: 50}]}>
                <Text>Work</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cardBox, {borderRadius: 0, height: 50}]}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.cardBox, {borderRadius: 0, height: 50}]}>
                <Text>Other</Text>
            </TouchableOpacity>
        </View>

        <View style={[styles.cardBox, {borderRadius: 0, marginTop: 20, marginBottom: 20, flex: 1}]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <TouchableOpacity style={[styles.taskContainer, {backgroundColor: 'grey', opacity: 0.3}]}>
                    <Text>100 Push-ups</Text>
                </TouchableOpacity>
                <View style={[styles.taskContainer, {backgroundColor: 'lightgreen'}]}>
                    <Text>100 Squats</Text>
                </View>
                <View style={styles.taskContainer}>
                    <Text>10 minutes of Meditaion</Text>
                </View>
                <View style={styles.taskContainer}>
                    <Text>5 book reading</Text>
                </View>
                <View style={styles.taskContainer}>
                    <Text>sleeping</Text>
                </View>
                <View style={styles.taskContainer}>
                    <Text>cooking</Text>
                </View>
                <View style={styles.taskContainer}>
                    <Text>100 Push-ups</Text>
                </View>
            </ScrollView>
        </View>
    </View>
  );
}

const styles = {
  titleContainer: {
    marginTop: 40,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  homeScreenContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  cardBox: {
    borderWidth: 1,
    backgroundColor: '#fff',
    height:110,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

    justifyContent: 'space-between',
  },
  taskContainer: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginVertical: 2,
  },
  filterBox: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalBox: {
    padding: 20,
    borderRadius: 10,
    width: '92%',
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputBox: {
    padding: 20,
    gap: 20,  
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  }
}
export default HomeScreen;

