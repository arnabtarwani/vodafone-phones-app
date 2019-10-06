import React from 'react'
import { withRouter } from 'react-router-dom'
import PhoneGalleryBox from './PhoneGalleryBox'
import PhoneModal from './PhoneModal'


interface IPhoneGallery {
  data: any,
  openModal: boolean,
  modalData: any,
  filterVal: string
}

class PhoneGallery extends React.Component<any, IPhoneGallery>  {

  constructor(props: any) {
    super(props)
    this.state = {
      data: {},
      openModal: false,
      modalData: {},
      filterVal: 'None' 
    }
    this.handleModalOpen = this.handleModalOpen.bind(this)
    this.FilterByLow = this.FilterByLow.bind(this)
  }

  componentDidMount = () => {
    this.fetchPhones()
  }

  componentWillUnmount = () => {
    this.handleModalClose()
  }

  fetchPhones = async () => {
    await fetch('api/phones.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({ data: res.products })
      });

    this.filterData(this.state.data)
  }


  handleModalOpen = (item: any) => {
    this.setState({ openModal: true, modalData: item })
    console.log(this.state.modalData)
  }

  handleModalClose = () => {
    this.setState({ openModal: false })
  }

  filterData = (data: any) => {
    if (this.state.filterVal === 'Low') {
      let xData = Object.values(this.state.data)
      console.log(xData);
      this.setState({ data: xData })
    } else {
      this.setState({ data: data })
    }
  }

  PhoneGalleryRender = () => {
    return Object.values(this.state.data).map((item: any, index) =>

      <PhoneGalleryBox phoneName={item.name} key={index} frontImg={item.imageSrc}
        link={item.id}
        phoneData={item}
        initialPhonePrice={'€' + item.initialPhonePrice.value} onOpen={() => this.handleModalOpen(item)}
        initialPlanName={item.initialPlan.planName}
        initialPlanPrice={item.initialPlan.planPrice}
        currency={item.initialPlan.currency}
      />
    )
  }

  lowToHigh = () => {
    this.setState({ filterVal: 'Low' })
    console.log(this.state.filterVal);
    this.filterData(this.state.data)
  }

  FilterByLow = () => {
    return <button onClick={this.lowToHigh} type="button" className="inline-flex justify-center items-center w-auto rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white mr-5 text-sm font-medium text-gray-700 hover:bg-gray-50" id="options-menu" aria-haspopup="true" aria-expanded="true">
      Low to High
    </button>
  }

  FilterByHigh = () => {
    return <button onClick={() => { this.setState({ filterVal: 'High' }) }} type="button" className="inline-flex justify-center items-center w-auto rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white mr-5 text-sm font-medium text-gray-700 hover:bg-gray-50" id="options-menu" aria-haspopup="true" aria-expanded="true">
      High to Low
    </button>
  }

  FilterByBrand = () => {

    return <button onClick={() => { }} type="button" className="inline-flex justify-center items-center w-auto rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white mr-5 text-sm font-medium text-gray-700 hover:bg-gray-50" id="options-menu" aria-haspopup="true" aria-expanded="true">
      Brand
    </button>
  }


  public render() {
    return (
      <div>
        {this.state.openModal &&
          <PhoneModal onClose={this.handleModalClose}
            title={this.state.modalData.name}
            brand={this.state.modalData.brand}
            price={this.state.modalData.initialPhonePrice.value}
            initialPlanName={this.state.modalData.initialPlan.planName}
            initialPlanPrice={this.state.modalData.initialPlan.planPrice}
            currency={this.state.modalData.initialPlan.currency}
            images={this.state.modalData.variants[0].phoneImages} />}
        <section className="text-gray-600 body-font">
          <div className="container px-15 py-14 mx-auto">
            <div className="flex flex-row items-center m-30 ml-4">
              <div className="mr-5">
                Sort by: 
              </div>
              {this.FilterByLow()}
              {this.FilterByHigh()}
              {this.FilterByBrand()}
              {/* <FilterDropDown filterValue={this.state.filterVal} /> */}
            </div>
            <div className="flex flex-wrap -m-0">
              {this.PhoneGalleryRender()}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default withRouter(PhoneGallery);
