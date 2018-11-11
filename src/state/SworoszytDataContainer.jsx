import { Container } from 'unstated';
import { List } from 'immutable';


export class SworoszytDataContainer extends Container {

    state = {
        notes: List([]),
        newNote: ''
    }

    async Init() {
        let loadedState = this.LoadState();
        if (loadedState !== null) {
            loadedState.notes = List(loadedState.notes)
            await this.setState(loadedState);
        }
    }

    SaveState() {
        localStorage.setItem('sworoszyt', JSON.stringify(this.state));
    }

    LoadState() {
        return JSON.parse(localStorage.getItem('sworoszyt'));
    }

    addNote = async () => {
        await this.setState({
            notes: this.state.notes.push({
                text: this.state.newNote,
                done: false
            }),
            newNote: ''
        });
        this.SaveState();
    }

    handleNewNoteInput = (e) => this.setState({ newNote: e.target.value })
}