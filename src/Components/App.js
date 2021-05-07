import React, { Component } from "react";
import newApi from "./services/new-api";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import Button from "./button/Button";
import Modal from "./modal/Modal";

class App extends Component {
  state = {
    hits: [],
    largeImageURL: "",
    searchQuery: "",
    page: 1,
    isLoading: false,
    error: null,
    showModal: false
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchArticles();
    }
  }
  onChangeQuery = query => {
    this.setState({ searchQuery: query, page: 1, hits: [], error: null });
  };

  fetchArticles = () => {
    const { page, searchQuery } = this.state;
    const options = { page, searchQuery };

    this.setState({ isLoading: true });

    newApi
      .fetchArticles(options)
      .then(hits => {
        this.setState(prevState => ({
          hits: [...prevState.hits, ...hits],
          page: prevState.page + 1
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });

        this.setState({
          isLoading: false
        });
      });
  };

  getImage = URL => {
    this.setState({
      largeImageURL: URL
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal
    }));
  };

  render() {
    const { hits, isLoading, error, showModal } = this.state;
    return (
      <>
        {error && <h2>ХАЛЕПА</h2>}
        <Searchbar onChangeQuery={this.onChangeQuery} />
        {isLoading && <h2>Загружаю момент</h2>}

        <ImageGallery hits={hits} getImage={this.getImage} />
        {hits.length > 0 && <Button fetchArticles={this.fetchArticles} />}
        {showModal && <Modal largeImageURL={this.state.largeImageURL} onClose={this.toggleModal} />}
      </>
    );
  }
}

export default App;
