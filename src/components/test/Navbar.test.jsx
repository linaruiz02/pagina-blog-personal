   
   
   // Tests that the Navbar function renders an AppBar component 
   //with a background color, boxShadow, and borderRadius. 
    it("test_navbar_renders_appbar", () => {
        const wrapper = shallow(<Navbar />);
        expect(wrapper.find(AppBar)).toHaveLength(1);
        expect(wrapper.find(AppBar).prop("sx")).toEqual({
            backgroundColor: "#C7EBB3",
            boxShadow: 0,
            borderRadius: "0 0 15px 15px",
        });
    });
