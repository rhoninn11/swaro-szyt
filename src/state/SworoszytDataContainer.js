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

    CheckNote(state, id) {
        return {
            notes: state.notes.update(id, n => {
                return {
                    text: n.text,
                    done: !n.done
                };
            })
        };
    }

    handleNewNoteInput = (e) => this.setState({ newNote: e.target.value })

    addNote = async () => {
        if (this.state.newNote !== '') {
            await this.setState({
                notes: this.state.notes.push({
                    text: this.state.newNote,
                    done: false
                }),
                newNote: ''
            });
            this.SaveState();
        }
    }

    deleteNote = async (id) => {
        await this.setState(state => {
            return {
                notes: state.notes.delete(id)
            };
        });
        this.SaveState();
    }

    markNoteAsDone = async (id) => {
        await this.setState(state => {
            return this.CheckNote(state, id);
        });
        this.SaveState();
    }

}