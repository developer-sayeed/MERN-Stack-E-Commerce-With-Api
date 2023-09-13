import swal from "sweetalert";

// basic sweetAlert
export const basicSweetAlert = (msg) => {
  swal(msg);
};

// Standard SweetAlert
export const standerSweetAlert = (msg, type = "success") => {
  swal(msg.title, msg.msg, type);
};

// Confermation SweetAlert
export const confirmationSweetAlert = (msg, type = "success") => {
  swal({
    title: msg.title,
    text: msg.msg,
    icon: type,
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Your Account Created Successful", {
        icon: "success",
      });
    } else {
      swal("Your Are Now Done!");
    }
  });
};
