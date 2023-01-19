import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Remarkable } from 'remarkable';
import './style.css';

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.md = new Remarkable({
            breaks: true,
        });
        this.handleChange = this.handleChange.bind(this);
        this.state = { value: 'Привет, **мир**!' };
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    getRawMarkup() {
        return { __html: this.md.render(this.state.value) };
    }

    render() {
        return (
            <div className="MarkdownEditor row mx-0">
                <div className="col">
                    <label htmlFor="editor" className="form-label">Editor</label>
                    <textarea
                        id="editor"
                        className="form-control"
                        onChange={this.handleChange}
                        defaultValue={this.state.value} />
                </div>
                <div className="col pr-2">
                    <label className="form-label">Previewer</label>
                    <div id="preview" className="border border-gray-400 rounded" dangerouslySetInnerHTML={this.getRawMarkup()} />
                </div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MarkdownEditor />);