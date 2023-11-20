import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'; 
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable';



const EditEvent = () => {
    const [inputValues, setInputValues] = useState({});
    const [selectedCategory, setSelectedCategory] = useState("General Information");
    const [listTypes, setListTypes] = useState([])
    const [keywords, setKeywords] = useState([])
    const [loading, setLoading] = useState(true);


    const router = useRouter();
    const { eventID } = router.query;

    let loadRendered = false;    

    useEffect(() => {
        if (eventID) {
            getEventDetails();
            getlistTypes();
            getKeywords();
        }
    }, [eventID]); // Ensure useEffect runs when eventID changes

    //APIs
    const getEventDetails = async () => {
        try {
            const response = await axios.get(`https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/events/${eventID}/details`);
            populateFormWithEventData(response.data.data);
        } catch (error) {
            console.error(error);
            toast.error('Failed to fetch event data');
        }
    };
    const getlistTypes = async () => {
      const axios = require('axios');
  
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/events/type',
        
      }
      await axios.request(config)
      .then((response) => {
          //console.log(response.data.data)
          
  
        const nameTypes = response.data.data.map(item => ({
          value: item.id,
          label:item.name
        }));
        setListTypes(nameTypes)
      })
      .catch((error) => {
          //console.log(error)
      })
    }
    const getKeywords = () => {
      const axios = require('axios');
    
    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://jonathana74.sg-host.com/event-buz-backend-main/api/v1/keyword/all',
      headers: { 
        'Accept': 'application/json', 
        'Content-Type': 'application/json'
      }
    };
    
    axios.request(config)
    .then((response) => {
      //console.log("[+] KEYWORDS",response.data.data);
      
      const keywordOptions = response.data.data.map((item) => ({
        value: item.id,
        label: item.name,
      }));
      setKeywords(keywordOptions);
    })
    .catch((error) => {
      //console.log(error);
    });
    }
    

    const categories = {
        "General Information": ["name", "type", "keyword", "description"],
        "Venue Location": ["venue_name", "country", "city", "building_name", "room_name", "room_number", "full_address", "street"],
        "Contact Person": ["Contact Name", "Contact Phone", "Contact Email"],
        "Event Sponsor": [],
        "Promotional Video and Images": ["Contact Namme", "Contact Phone", "Contact Email"],
        "Event Schedule": ["Contact Name", "Contact Phone", "Contact Email"],
        "Social Media": ["facebook", "instagram", "twitter", "pinterest", "linkedin"],
        "Options": ["Show on Main Calendar?", "Free Event?", "Reservations", "Max. Number of Orders, Tickets Additional Fields", "Tag Line", "Event Term & Condition", "Ticket Attachment"],
        "Additional Fields": ["Contact Name", "Contact Phone", "Contact Email"],
        // "Notifications": ["Notification List", "Summaries", "On App Message", "Email Message"],
        // "Invitations": ["Invitation List", "Summaries", "On App Message", "Email Message", ],
        // "Ticketing": ["Contact Name", "Contact Phone", "Contact Email"],
      };
      
      const handleInputChange = (fieldName, selectedOptions) => {
        if (fieldName === 'types') {
          
          const updatedTypes = selectedOptions.map(option => ({
              id: option.value,
              name: option.label
          }));
  
          setInputValues(prevValues => ({
              ...prevValues,
              [fieldName]: updatedTypes
          }));
      } 
      
        if (fieldName === 'keyword') {
          
          const updatedKeywords = selectedOptions.map(option => ({
              value: option.value,
              label: option.label
          }));
  
          setInputValues(prevValues => ({
              ...prevValues,
              [fieldName]: updatedKeywords
          }));
      } 

      //Handle text Inputs
      setInputValues(prevValues => ({
        ...prevValues,
        [fieldName]: selectedOptions 
    }));
  };
        
        
    
    
    
      
    const populateFormWithEventData = (eventData) => {
      const transformedTypes = eventData.types.map(type => ({
        value: type.id,
        label: type.name
      }));
      
      let transformedKeywords = [];
      if (Array.isArray(eventData.keywords)) {
        transformedKeywords = eventData.keywords.map(keyword => ({
          value: keyword.id, // Assuming keyword is a string or has a similar structure
          label: keyword.name  // Use the same string as label
        }));
      }
        //console.log("Types for the select field", transformedTypes)
        setInputValues({
            name: eventData.name || '',
            type: transformedTypes,
            keyword: transformedKeywords,
            description: eventData.description || '',
            contact: eventData.contact || '',
            types: eventData.types || '',
            keywords: eventData.keywords || '',
            schedules: eventData.schedules || '',
            sponsors: eventData.sponsors || '',
            additional_fields: eventData.additional_fields || '',
            media: eventData.media || '',
            venue_location: eventData.venue_location || '',
            social_media: eventData.social_media || '',
            options: eventData.options || '',             
        });
        console.log("Keywords in inputValues",inputValues.keyword)
    };

    // Observe changes to inputValues
    useEffect(() => {
        //console.log("[+] InputValues Updated:", inputValues);
    }, [inputValues]);

    // Add the return statement for your component's JSX
    return (
        <div className="backgroundCreateEvent" style={{minHeight: '200vh'}}>
            <div className="container">


                <div className="category-list">
                {Object.keys(categories).map((category) => (
                    <div
                        key={category}
                        className={`category-item ${selectedCategory === category ? 'selected' : ''}`}
                        onClick={() => { 
                        setLoading(true)
                        handleCategoryClick(category) }}
                    >
                        {category}
                    </div>
                    ))}
                </div>

                <div className="input-fields">
        <h2>{selectedCategory}</h2>
       { (() => {
        switch (selectedCategory) {
            case "General Information":
            const generalInfoFields = categories["General Information"];
            if (!generalInfoFields) return <p>General Information not found</p>;
            
            return generalInfoFields.map((title, index) => (
                <div key={`${selectedCategory}-${index}`} className="input-group">
                <label>{title}</label>
                {title == "keyword" ? (
                <CreatableSelect 
                key={`${selectedCategory}-${title}`} 
                isMulti options={keywords}  
                value={inputValues.keyword}
                onChange={selectedOptions => handleInputChange('keyword', selectedOptions)}
                
            />
            
                ) : title== "type" ? (
                
                <Select 
                    key={`${selectedCategory}-${title}`}
                    options={listTypes} 
                    isMulti  
                    value={inputValues.types ? inputValues.types.map(type => ({ value: type.id, label: type.name })) : []}
                    onChange={selectedOptions => handleInputChange('types', selectedOptions)}

                
                
                />                                                      
                ) : (
                <input 
                    key={`${selectedCategory}-${title}`}
                    type="text" 
                    placeholder={`Enter ${title}`} 
                    value={inputValues[title] || ''}
                    onChange={(e) => handleInputChange(title, e.target.value)}
                    style={{backgroundColor: "#3b3b3b"}}
                />
                )}
            </div>
            ));
           case "Venue Location":
            const renderLoading = () => {
              if (!loadRendered) {
                loadRendered = true
                return <div className='loaderContainer'><div className='loader'> </div></div>
              }
            }


                
        }
       })()}

        
{selectedCategory !== "Event Sponsor" && (
  <button 
    className="userProfileButton" 
    style={{marginLeft: 580, marginTop: 40}}
  >
    <a 
      onClick={() => {
        // //console.log(inputValues)
        // createEvent(inputValues)
        nextCategory()
        executeApiCall()
      }} 
      className="usernameTitle" 
      style={{marginLeft: 55}}
    >
      Continue
    </a>
  </button>
)}
      </div>
      <style jsx>{`
        
        .container {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          position: relative;
        }
        .category-list {
          flex: 1;
          margin-right: 20px;
          height: 700px
          position: sticky;
          top: 0;
          overflow-x: hidden;  // Prevent horizontal scrolling
          overflow-y: auto;    // Allow vertical scrolling if content is taller than container
          
        }
        .category-item {
          padding: 10px;
          width: 370px;
          margin-left: 19px;
          margin-top: 15px;
          cursor: pointer;
          border-radius: 10px;
          color: #FFF;
          background-color: #3C3E42;
          ;
        }
        .category-item.selected {
          background-color: #B62872;
        }
        .input-fields {
          flex: 2;
          background-color: #2A2B2E;
        }

        .input-fields h2 {
          color: #FFF;
          margin-left: 30px;
          margin-top: 10px;
        }

        .input-group {
          margin-bottom: 0px;
          width: 80%;
          margin-top: 25px;
          margin-left: 70px;
        }
        .input-group label {
          display: block;
          color: white;
        }
        input {
          display: block;
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border: 1px solid #ccc;
          border-radius: 10px;
          color: #FFF;
        }
        .ckeditor {
          width: 500px;
          height: 400px;
          border-radius: 10px;
        }
        
        
      `}</style>                
            </div>
        </div>
    );
};

export default EditEvent;